function caesarCipher(s, k) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + k) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + k) % 26) + 97);
        } else {
            result += s[i];
        }
    }
    return result;
}
