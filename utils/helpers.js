module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },

  format_slug: (content) => {
    if (content.length > 60) {
      return content.slice(0, 60) + '... (Click title to read more).';
    } else {
      return content;
    }
  },

  user_owns_post: (sessionUsername, postUsername) => {
    return sessionUsername === postUsername;
  },
};
