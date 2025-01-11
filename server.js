// Que=1 Merge K Short Listed

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;
    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode();
        let current = dummy;

        while (l1 && l2) {
            if (l1.value < l2.value) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = l1 || l2; 
        return dummy.next;
    };
    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            mergedLists.push(mergeTwoLists(lists[i], lists[i + 1] || null));
        }
        lists = mergedLists;
    }

    return lists[0];
}
const arrayToList = (arr) => arr.reduceRight((next, value) => new ListNode(value, next), null);
const listToArray = (head) => {
    const result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    return result;
};
const input = [[90, 80, 73], [89, 93, 64], [54, 36]];
const lists = input.map(arrayToList);
const mergedList = mergeKLists(lists);
const output = listToArray(mergedList);
console.log(output);


//Que = 2  Find Longest Palindromic Substring

function isPalindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return [left + 1, right - 1];
}

function longestPalindromicSubstring(s) {
    if (s.length === 0) return "";
    
    let start = 0, end = 0;
      
    for (let i = 0; i < s.length; i++) {
        let [left1, right1] = isPalindrome(s, i, i);
        let [left2, right2] = isPalindrome(s, i, i + 1);
        if (right1 - left1 > end - start) {
            start = left1;
            end = right1;
        }
        if (right2 - left2 > end - start) {
            start = left2;
            end = right2;
        }
    }
    
    return s.substring(start, end + 1);
}
const Lead = "THINKTANKER";
console.log("Longest Palindromic Substring:", longestPalindromicSubstring(Lead));


// Que = 3 Find the Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
const Lead2 = "lookoutput";
console.log("Length of Longest Substring Without Repeating Characters:", lengthOfLongestSubstring(Lead2));

