var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(0, 15);
var triangle3Area = getTriangleArea(10, 1);

function getTriangleArea(a, h) {
	
	if ((a > 0) && (h > 0)) {
		return a * h / 2;
	}
	else {
		return 'Nieprawidłowe dane';
	}
}

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);