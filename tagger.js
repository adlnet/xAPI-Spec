'use strict';

const fs = require('fs');

class Block {
	constructor(name, text, linenum)
	{
		this.name = name;
		this.text = text;
		this.linenum = linenum;
	}
}

var Elements

class Parser
{
	constructor()
	{
		this.stack = [];
		this.outBuffer = [];
	}

	process(filename)
	{
		// read input
		var buffer = fs.readFileSync(process.argv[process.argv.length-1], 'utf8');
		buffer = buffer.split('\n');

		// parse input
		for(var i=0; i<buffer.length; i++){
			this.processLine(buffer[i], i);
		}

		return this.outBuffer.join('\n');
	}

	processLine(text, linenum)
	{
		var match, block, prevIndex;

		// check for named headings
		if( match = /^(#+)\s*(\d+(?:\.\d+)+)\s+(.*)/.exec(text) )
		{
			block = new Block(match[2], match[3], linenum);
			this.stack = [block];

			this.outBuffer.push( `${match[1]} <a name="${block.name}">${block.name}</a> ${block.text}` );
		}

		// check for appendix headings
		else if( match = /^(#+)\s*Appendix ([A-Z]):\s+(.*)/.exec(text) )
		{
			block = new Block(match[2], match[3], linenum);
			this.stack = [block];

			this.outBuffer.push( `${match[1]} <a name="${block.name}">Appendix ${block.name}</a>: ${block.text}` );
		}

		// check for other headings
		else if( this.stack[0] && (match = /^(#+)\s*([^#]+)/.exec(text)) )
		{
			prevIndex = this.stack[1] ? this.stack[1].counter : 0;
			block = new Block('s'+(prevIndex+1), match[2].trim(), linenum);
			block.counter = prevIndex+1;
			this.stack = [this.stack[0], block];

			var fullname = this.stack.map(x => x.name).join('.');
			this.outBuffer.push( `${match[1]} <a name="${fullname}"></a>${block.text}` );
		}

		// check for bulleted lists
		else if( this.stack.length > 0 && (match = /^(\s*)[*+-] (.*)/.exec(text)) )
		{
			var lastBlock = this.stack.pop();

			// start of a list under this heading
			if( lastBlock.name.charAt(0) !== 'b' )
			{
				block = new Block('b1', match[2], linenum);
				block.counter = 1;
				block.level = match[1];
				this.stack.push(lastBlock);
				this.stack.push(block);
			}
			else if( !match[1] )
			{
				if(lastBlock.level)
					lastBlock = this.stack.pop();

				block = new Block('b'+(lastBlock.counter+1), match[2], linenum);
				block.counter = lastBlock.counter+1;
				block.level = match[1];
				this.stack.push(block);
			}
			else
			{
				if(!lastBlock.level)
					this.stack.push(lastBlock);

				block = new Block('b'+(lastBlock.level ? lastBlock.counter+1 : 1), match[2], linenum);
				block.counter = lastBlock.level ? lastBlock.counter+1 : 1;
				block.level = match[1];
				this.stack.push(block);
			}

			var fullname = this.stack.map(x => x.name).join('.');
			this.outBuffer.push( `${block.level}* <a name="${fullname}"></a>${block.text}` );
		}

		// every other line
		else
			this.outBuffer.push( text );

		if(block)
			console.log(`(${linenum}) ${this.stack.map(x => x.name).join('.')} ${block.text}`);
	}
}



/*********************************************
	Process file
*********************************************/

// check for input
if( process.argv.length <= 2 )
{
	console.log('Expected filename as input');
	process.exit();
}
else {
	var parser = new Parser();
	var output = parser.process( process.argv[process.argv.length-1] );
	fs.writeFile('output.md', output);
	//console.log(output);
}
