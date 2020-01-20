const utils = {
  titleCase(str: string): string {
    str = str.toLowerCase().split(' ');

    const final = [];

    for (const word of str) {
      final.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return final.join(' ');
  }
};

export default utils;
