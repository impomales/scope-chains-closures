function foo() {
	var bar;
	quux = 'a';

	function zip() {
		var quux = 'b';
		bar = true;
	};

	return zip;
}