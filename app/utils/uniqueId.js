const rnd = () => Math.random();

export const uniqueId = () => (rnd() * Date.now() - rnd() * Date.now() * 0.5).toString(36);

