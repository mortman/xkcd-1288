walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bwitnesses\b/gi, "these dudes I know");
	v = v.replace(/\ballegedly\b/gi, "kinda probabaly");
	v = v.replace(/\bnew study\b/gi, "tumblr post");
	v = v.replace(/\brebuilt\b/gi, "avenge");
	v = v.replace(/\bspace\b/gi, "spaaaace");
	v = v.replace(/\bgoogle glass\b/gi, "virtual boy");
	v = v.replace(/\bsmartphone\b/gi, "pokedex");
	v = v.replace(/\belectric\b/gi, "atomic");
	v = v.replace(/\bsenator\b/gi, "elf lord");
	v = v.replace(/\bcar\b/gi, "cat");
	v = v.replace(/\belection\b/gi, "eating contest");
	v = v.replace(/\bcongrssional leaders\b/gi, "river spirits");
	v = v.replace(/\bhomeland security\b/gi, "homestar runner");
	v = v.replace(/\bcan not be reached for comment\b/gi, "is guilty and everyone knows it");
	
	textNode.nodeValue = v;
}


