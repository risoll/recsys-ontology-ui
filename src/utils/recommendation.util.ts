const b = 0.2;

export function updatePref(pOld: number, pAssign: number): number{
	return Math.min(1, pOld + b * pAssign);
}

export function updateConf(cOld: number, cAssign: number): number{
	return b * cOld + (1 - b) * cAssign;
}