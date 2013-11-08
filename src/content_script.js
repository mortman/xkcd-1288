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

	v = v.replace(/\bWitnesses\b/g, "The dude I know");
	v = v.replace(/\bAllegedly\b/g, "Kinda probabaly");
	v = v.replace(/\bNew study\b/g, "Tumblr post");
	v = v.replace(/\bRebuilt\b/g, "Avenge");
	v = v.replace(/\bSpace\b/g, "Spaaaace");
	v = v.replace(/\bGoogle glass\b/g, "Virtual boy");
	v = v.replace(/\bSmartphone\b/g, "Pokedex");
	v = v.replace(/\bElectric\b/g, "Atomic");
	v = v.replace(/\bSenator\b/g, "Elf Lord");
	v = v.replace(/\bCar\b/g, "Cat");
	v = v.replace(/\bElection\b/g, "Eating contest");
	v = v.replace(/\bCongrssional leaders\b/g, "River spirits");
	v = v.replace(/\bHomeland Security\b/g, "Homestar runner");
	v = v.replace(/\bCan not be reached for comment\b/g, "Is guilty and everyone knows it");
	
	textNode.nodeValue = v;
}


