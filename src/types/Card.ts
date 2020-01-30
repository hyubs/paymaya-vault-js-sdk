type Month = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";

interface Card {
  number: string;
  expMonth: Month;
  expYear: string;
  cvc: string;
}

export default Card;
