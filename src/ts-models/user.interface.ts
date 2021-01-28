export interface User {
	length: number;
	width: number;
	wheelbase: number;
	seatingCapacity: number;
	getTyrePressure: () => number;
	getRemCharging: () => number;
}
