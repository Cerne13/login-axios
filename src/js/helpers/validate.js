const regExpDic = {
	email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
	password: /^[0-9a-zA-z]{4,}$/,
};

/**
 * Function validate..check input on RegExp provided in regExpDic
 * by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Returns true if input data is valid or input doesn't have data-required attr
 */
export function validate(el) {
	const regExpName = el.dataset.required;

	if (!regExpDic[regExpName]) return true;

	return regExpDic[regExpName].test(el.value);
}
