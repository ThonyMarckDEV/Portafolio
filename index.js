document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
    document.querySelector(".logoThony").style.opacity = 1;
    document.getElementById("codeOutput").style.opacity = 1;
    
    type();
    startScrolling();
});

const codeContainer = document.getElementById('codeOutput');

const codeSnippets = [
    `public class Main {
    public static void main(String[] args) {
        System.out.println("Hola, Mundo!");
    }
}`,
    `public class Factorial {
    public static int factorial(int n) {
        if (n <= 1) return 1;
        else return n * factorial(n - 1);
    }
}`,
    `public class Fibonacci {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        else return fibonacci(n - 1) + fibonacci(n - 2);
    }
}`,
    `public class Palindrome {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }
}`,
    `public class PrimeCheck {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}`,
    `public class GCD {
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
}`,
    `public class ReverseString {
    public static String reverse(String s) {
        StringBuilder reversed = new StringBuilder(s);
        return reversed.reverse().toString();
    }
}`,
    `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}`
];

let snippetIndex = 0;
let charIndex = 0;
let currentSnippet = '';
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenSnippets = 1000;

function type() {
    codeContainer.innerHTML = currentSnippet;

    if (!isDeleting && charIndex < codeSnippets[snippetIndex].length) {
        currentSnippet += codeSnippets[snippetIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        currentSnippet = currentSnippet.slice(0, -1);
        charIndex--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && charIndex === codeSnippets[snippetIndex].length) {
        isDeleting = true;
        setTimeout(type, pauseBetweenSnippets);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        snippetIndex = (snippetIndex + 1) % codeSnippets.length;
        setTimeout(type, typingSpeed);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logoThony');
    const socialMenu = document.getElementById('socialMenu');

    logo.addEventListener('click', function(event) {
        socialMenu.style.display = socialMenu.style.display === 'flex' ? 'none' : 'flex';
        logo.classList.toggle('clicked');
        event.stopPropagation(); // Evita que el clic se propague al body
    });

    document.body.addEventListener('click', function() {
        if (socialMenu.style.display === 'flex') {
            socialMenu.style.display = 'none';
            logo.classList.remove('clicked');
        }
    });

    socialMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el clic se propague al body
    });
});
