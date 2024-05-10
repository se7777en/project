// class Node {
//     constructor(char, freq, left=null, right=null) {
//         this.char = char;
//         this.freq = freq;
//         this.left = left;
//         this.right = right;
//     }
// }

// function buildFrequencyMap(text) {
//     const freqMap = {};
//     for (let char of text) {
//         if (char in freqMap) {
//             freqMap[char]++;
//         } else {
//             freqMap[char] = 1;
//         }
//     }
//     return freqMap;
// }

// function buildHuffmanTree(freqMap) {
//     const heap = [];
//     for (let char in freqMap) {
//         heap.push(new Node(char, freqMap[char]));
//     }
//     while (heap.length > 1) {
//         heap.sort((a, b) => a.freq - b.freq);
//         const left = heap.shift();
//         const right = heap.shift();
//         const merged = new Node(null, left.freq + right.freq, left, right);
//         heap.push(merged);
//     }
//     return heap.shift();
// }

// function buildEncodingMap(root, prefix='', encodingMap={}) {
//     if (root) {
//         if (root.char !== null) {
//             encodingMap[root.char] = prefix;
//         }
//         buildEncodingMap(root.left, prefix + '0', encodingMap);
//         buildEncodingMap(root.right, prefix + '1', encodingMap);
//     }
//     return encodingMap;
// }

// function encodeTree(root) {
//     if (!root) return '';
//     let encodedTree = '';
//     if (root.char !== null) {
//         encodedTree += '1'; // Отмечаем лист
//         encodedTree += root.char;
//     } else {
//         encodedTree += '0'; // Отмечаем внутренний узел
//         encodedTree += encodeTree(root.left);
//         encodedTree += encodeTree(root.right);
//     }
//     return encodedTree;
// }

// function decodeTree(encodedTree) {
//     let index = 0;
//     function decode() {
//         const isLeaf = encodedTree[index] === '1';
//         index++;
//         if (isLeaf) {
//             return new Node(encodedTree[index], 0);
//         } else {
//             const left = decode();
//             const right = decode();
//             return new Node(null, 0, left, right);
//         }
//     }
//     return decode();
// }

// function compress(text) {
//     const freqMap = buildFrequencyMap(text);
//     const root = buildHuffmanTree(freqMap);
//     const encodingMap = buildEncodingMap(root);
//     const encodedTree = encodeTree(root);
//     let compressedText = encodedTree + '|'; // Разделитель между деревом и сжатым текстом
//     for (let char of text) {
//         compressedText += encodingMap[char];
//     }
//     return compressedText;
// }

// function decompress(compressedText) {
//     const separatorIndex = compressedText.indexOf('|');
//     const encodedTree = compressedText.substring(0, separatorIndex);
//     const root = decodeTree(encodedTree);
//     let currentNode = root;
//     let decompressedText = '';
//     for (let i = separatorIndex + 1; i < compressedText.length; i++) {
//         currentNode = compressedText[i] === '0' ? currentNode.left : currentNode.right;
//         if (currentNode.char !== null) {
//             decompressedText += currentNode.char;
//             currentNode = root;
//         }
//     }
//     return decompressedText;
// }

// // Пример использования:
// const text = "Lorem ipsum dolor sit amet";

// // Сжатие текста
// const compressedText = compress(text);
// console.log("Compressed Text:", compressedText);

// // Распаковка сжатого текста
// const decompressedText = decompress(compressedText);
// console.log("Decompressed Text:", decompressedText);
