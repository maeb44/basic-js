const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNumber, turnsSpeed) {
    // Количество минимальных ходов для решения Ханойских башень
    const minTurns = Math.pow(2, diskNumber) - 1;
    
    // Время в секундах для выполнения всех ходов
    const timeInSeconds = (minTurns / turnsSpeed) * 3600;
    
    return {
        turns: minTurns,
        seconds: Math.floor(timeInSeconds)
    };
}

module.exports = {
  calculateHanoi
};
