const mapping = {
  "A": "😇", "B": "🤗", "C": "😋", "D": "😪",
  "E": "🤐", "F": "😶", "G": "😲", "H": "😳",
  "I": "🥸", "J": "😒", "K": "🙁", "L": "🤭",
  "M": "😜", "N": "😚", "O": "🫡", "P": "😷",
  "Q": "😯", "R": "😖", "S": "😨", "T": "😩",
  "U": "😤", "V": "😠", "W": "💀", "X": "🤡",
  "Y": "🤖", "Z": "👀",
  "0": "🤲",
  "1": "🙌", "2": "👉", "3": "👌",
  "4": "🤝", "5": "🖐️", "6": "🫸",
  "7": "🤙", "8": "🤛", "9": "🫰", " ": "-"
};

const invertedMapping = {
  "😇": "A", "🤗": "B", "😋": "C", "😪": "D",
  "🤐": "E", "😶": "F", "😲": "G", "😳": "H",
  "🥸": "I", "😒": "J", "🙁": "K", "🤭": "L",
  "😜": "M", "😚": "N", "🫡": "O", "😷": "P",
  "😯": "Q", "😖": "R", "😨": "S", "😩": "T",
  "😤": "U", "😠": "V", "💀": "W", "🤡": "X",
  "🤖": "Y", "👀": "Z",
  "🤲": "0",
  "🙌": "1", "👉": "2", "👌": "3",
  "🤝": "4", "🖐️": "5", "🫸": "6",
  "🤙": "7", "🤛": "8", "🫰": "9", "-": " "
};

function text2emojis() {
  let input = document.getElementById("input").value;
  input = input.toUpperCase();

  let arr1 = input.split("");

  let arr2 = arr1.map(x => mapping[x] || x);

  let code = arr2.join(" ");
  document.getElementById("output").value = code;
}

function emojis2text() {
  let input2 = document.getElementById("input2").value;

  // Split input based on spaces
  let arr1 = input2.split(" ");

  // Map each emoji to its corresponding text
  let arr2 = arr1.map(x => {
    if (invertedMapping[x]) {
      return invertedMapping[x];
    } else {
      return x;
    }
  });

  let code = arr2.join("");

  document.getElementById("output2").value = code;
}
