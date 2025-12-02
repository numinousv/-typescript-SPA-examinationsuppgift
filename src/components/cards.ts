export interface Card {
  number: number;
  imageUrl: string;
  text: string;
  opened?: boolean;
}

export const cards: Card[] = [
  {
    number: 1,
    imageUrl: "01_checking_bank_balance.webp",
    text: `Checking your bank balance after buying 3 presents`,
  },
  {
    number: 2,
    imageUrl: "02_hearing_christmas_song.webp",
    text: `Hearing “All I Want for Christmas Is You” for the 50th time`,
  },
  {
    number: 3,
    imageUrl: "03_burning_the_cookies.webp",
    text: `Burning the cookies`,
  },
  {
    number: 4,
    imageUrl: "04_office_small_talk.webp",
    text: `Office Christmas party small talk`,
  },
  {
    number: 5,
    imageUrl: "05_batteries_for_gifts.webp",
    text: `Realizing you need batteries for half the gifts`,
  },
  {
    number: 6,
    imageUrl: "06_getting_heating_bill.webp",
    text: `Getting heating bills`,
  },
  {
    number: 7,
    imageUrl: "07_christmas_tree_cat.webp",
    text: `Keeping the cat away from the Christmas tree`,
  },
  {
    number: 8,
    imageUrl: `08_double_booked_parties.webp`,
    text: `Double-booking two Christmas parties you don't want to attend`,
  },
  {
    number: 9,
    imageUrl: "09_afternoon_in_pajamas.webp",
    text: `It's 3:30 PM and you're still in pajamas`,
  },
  {
    number: 10,
    imageUrl: "10_perfect_present_out_of_stock.webp",
    text: `The “perfect gift” is out of stock everywhere`,
  },
  {
    number: 11,
    imageUrl: "11_pinterest_christmas.webp",
    text: `Comparing your Christmas to other people's perfect Pinterest lives`,
  },
  {
    number: 12,
    imageUrl: "12_saying_no_to_drink.webp",
    text: `Trying to politely decline “just one more drink”`,
  },
  {
    number: 13,
    imageUrl: "13_shedding_tree.webp",
    text: `The Christmas tree is shedding already`,
  },
  {
    number: 14,
    imageUrl: "14_family_board_game.webp",
    text: `The family board game that turns into a cold war`,
  },
  {
    number: 15,
    imageUrl: "15_losing_one_glove.webp",
    text: `Losing one glove. Always one`,
  },
  {
    number: 16,
    imageUrl: "16_secret_santa_gift.webp",
    text: `Wondering if your Secret Santa gift will actually offend someone`,
  },
  {
    number: 17,
    imageUrl: "17_getting_present_for_a_dog.webp",
    text: `Realizing you also need to buy something for the dog`,
  },
  {
    number: 18,
    imageUrl: "18_christmas_grocery_shopping.webp",
    text: `Standing in a mile-long checkout line behind someone with coupons`,
  },
  {
    number: 19,
    imageUrl: "19_out_of_wrapping_paper.webp",
    text: `Running out of wrapping paper at midnight`,
  },
  {
    number: 20,
    imageUrl: "20_family_chat.webp",
    text: `The family chat blowing up with 147 new messages`,
  },
  {
    number: 21,
    imageUrl: "21_volunteered_to_cook.webp",
    text: `Realizing you've been volunteered to cook`,
  },
  {
    number: 22,
    imageUrl: "22_explaining_your_job.webp",
    text: `Explaining your job to relatives for the fifth time`,
  },
  {
    number: 23,
    imageUrl: "23_new_year_resolutions.webp",
    text: `The year is almost over and your resolutions never started`,
  },
  {
    number: 24,
    imageUrl: "24_post_christmas_cleanup.webp",
    text: `The post-Christmas clean-up mountain`,
  },
];
// funktion för att tracka öppnade kort och återanvända de som är i localstorage
export const openedCardsNumbers: number[] =
  JSON.parse(localStorage.getItem("openedCardsNumbers")!) || [];

if (openedCardsNumbers.length) {
  cards.forEach((card) => {
    if (openedCardsNumbers.includes(card.number)) {
      card.opened = true;
    }
  });
}

export function saveOpenedCardNumber(num: number): void {
  if (openedCardsNumbers.includes(num)) return;
  openedCardsNumbers.push(num);
  localStorage.setItem(
    "openedCardsNumbers",
    JSON.stringify(openedCardsNumbers)
  );
}

export function clearOpenedCardNumbers(): void {
  localStorage.removeItem("openedCardsNumbers");
}
