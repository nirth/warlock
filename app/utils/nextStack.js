/**
 * Utility executes function specified in parameter `fun` immidiately after
 * current call stack finished. It uses `setTimeout` with 0 milliseconds for that.
 *
 * @param {Function} fun - Refernce to function that should be executed.
 * @returns {number} - Settimeout id, that you won't have time to use.
 */
export const nextStack = (fun) => setTimeout(fun, 0);
