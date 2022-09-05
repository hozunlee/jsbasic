// rand
const rand = (start, end) => {
    return Math.floor(Math.random() * (end - start) + start);
};

export { rand };
