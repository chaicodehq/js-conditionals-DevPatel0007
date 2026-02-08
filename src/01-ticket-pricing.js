/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  if(age >= 0 && age <= 12) {
    if (isWeekend){
      return 11
    }else{
      return 8
    }
  }
  //15 -12
  if(age >= 13 && age <= 17) {
    if (isWeekend){
      return 15
    }else{
      return 12
    }
  }
  //18 -15
  if(age >= 18 && age <= 59) {
    if (isWeekend){
      return 18
    }else{
      return 15
    }
  }
  // 13 -10
  if(age >= 60) {
    if (isWeekend){
      return 13
    }else{
      return 10
    }
  }
  return -1;  
}
