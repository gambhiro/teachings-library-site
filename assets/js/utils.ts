const utils = {
  titleCase(title: string): string {
    const parts = title.toLowerCase().split(' ');

    const final = [];

    for (const word of parts) {
      final.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return final.join(' ');
  }
};

export default utils;
