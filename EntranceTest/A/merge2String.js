function merge2String(s1, s2) {
    len = Math.min(s1.length, s2.length);
    res = "";
    for (let i = 0; i < len; i++) {
        res += s1[i] + s2[i];
    }
    if (s1.length > s2.length) {
        res += s1.substring(len);
    }
    else if (s1.length < s2.length) {
        res += s2.substring(len);
    }
    return res;
}

console.log(merge2String("abc", "xyz"));
console.log(merge2String("abc", "xyzt"));
console.log(merge2String("abcd", "xyz"));