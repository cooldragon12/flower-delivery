
export const BASE_URL = "./flowerpic";

export const items = [
   {
     id:1,
     title: 'Blushing Blossoms', //1
     description: `The sweet calming colours of the roses and lilies in this lavish hand bouquet is sure to make your loved one smile!`,
     contents: `Small Roses Bouquet
     2 pcs Pink Lillies
     3 pcs Unbloomed Pink Lillies`,
     price: 1299.99,
     img:require(BASE_URL+"/BlushingBlooms.png"),
     featured:false,
     ratings:3.8, // Max is 5
     category:"Birthdays",
     bestSeller:false
   },
   {
    id:2,
    title: 'Moonlight B-Day Bundle', //2
    description: `Make it the perfect gift with this Birthday Bunddle!`,
    contents: `Moonlight Pink Roses Bouquet
    16pcs Ferrero Rocher
    40cm diameter “Happy Birthday” balloon`,
    price: 1999.99,
    img:require( BASE_URL+"/MoonlightBirthdayBundle.png"),
    featured:false,
    ratings:4.7, // Max is 5
    category:"Birthdays",
    bestSeller:true
   },
   {
    id:3,
    title: 'Bernice Teddy Bouquet', //3
    description: "A combination of purple and pink flowers, with Bernice Teddy Dressed in Pink in the middle is the perfect surprise.",
    contents: `Roses bouquet
    White Teddy Bear`,
    price: 1389.99,
    img:require( BASE_URL+"/BerniceTeddyBouquet.png"),
    featured: true,
    ratings:4.6, // Max is 5
    category:"Birthdays",
    bestSeller:false
   },
   {
    id:4,
    title: 'Sweeter Blooms', //4
    description: "Spoil your special someone with the best of two worlds - Roses and Ferrero Rocher, united in a unique bouquet!",
    contents: `Pink Rose Bouquet 
    12pcs Ferrero Rochet`,
    price: 1389.99,
    img:require( BASE_URL+"/SweeterBlooms.png"),
    featured: false,
    ratings:4.4, // Max is 5
    category:"Birthdays",
    bestSeller:true
   },
   {
    id:5,
    title: 'Sweet Rosie Bundle',//5
    description: "Sweet Rosie Birthday Bundle is the perfect gift set for birthdays! Fresh bouquet of Pink and Red Roses together with a sweet chocolate dream cake and balloon will start her year right and bright!",
    contents: `Pink and Red Roses Bouquet
    Sweet Chocolate Dream Cake
    40cm diameter "Happy Birthday" balloon`,
    price: 1899.99,
    img:require( BASE_URL+"/SweetRosieBirthdayBundle.png"),
    featured: false,
    ratings:4.0, // Max is 5
    category:"Birthdays",
    bestSeller:false
  },
  {
    id:6,
    title: 'Hot Romance', //6
    description: "Up the romance with this beautiful and classic arrangement of red roses that is hand wrapped to perfection!",
    contents: `Red Roses Bouquet`,
    price: 1289.99,
    img:require( BASE_URL+"/hotromance.png"),
    featured: false,
    ratings:3.9, // Max is 5
    category:"Valentines",
    bestSeller:false
  },
  {
    id:7,
    title: 'Jade',//7
    description: "Red roses complemented by fine Baby Breath (Gypsophila) make Jade a true stunner among our arrangements.",
    contents: `12 Red Roses Bouquet
    Gysophilia flowers`,
    price: 1589.99,
    img:require( BASE_URL+"/Jade.png"),
    featured: false,
    ratings:4.1, // Max is 5
    category:"Valentines",
    bestSeller:false
  },
  {
    id:8,
    title: 'Kiss Me',//8
    description: "Red China Roses with White Million Star in a box matched with Ferrero Chocolates, is the perfect gift to celebrate the sweetness of a lifetime together with the one you love.",
    contents: `Red China Roses & White Million Star Bouquet
    12pcs Ferrero Rochet
    1pc Elegant Box`,
    price: 1999.99,
    img:require( BASE_URL+"/KissMe.png"),
    featured: false,
    ratings:4.0, // Max is 5
    category:"Valentines",
    bestSeller:false
  },
  {
    id:9,
    title: 'Sweet Cupid',//9
    description: "A combination of Imported Red Roses and Gypsophilla is a gift to show your appreciation to Mom this Mother's Day!",
    contents: `12 Red Roses Bouquet
    Gysophila flowers`,
    price: 1289.99,
    img:require( BASE_URL+"/SweetCupid.png"),
    featured: false,
    ratings:4.1, // Max is 5
    category:"Valentines",
    bestSeller:false
  },
  {
    id:10,
    title: 'Be My Valentine',//10
    description: "Put a smile on her face this today. Red Roses matched with Pink Lilies elegantly wrapped is the best gift to give on her special day!",
    contents: `Red Roses Bouquet
    Unbloomed and Bloomed Pink Lilies`,
    price: 1489.99,
    img:require( BASE_URL+"/BeMyValentine.png"),
    featured: false,
    ratings:3.9, // Max is 5
    category:"Valentines",
    bestSeller:false
  },
  {
    id:11,
    title: 'Clouds of Affection',//11
    description: "A dreamy flower bouquet that expresses your love and affection. This bouquet leave your special person daydreaming with the light blue hydrangeas, carnations, white eustomas and eryngium carefully and perfectly arranged.",
    contents: `Light Blue Hydrangeas
    Pink Carnations
    White Eustomas
    Eryngim`,
    price: 1499.99,
    img:require( BASE_URL+"/CloudsOfAffection.png"),
    featured: false,
    ratings:4.4, // Max is 5
    category:"ForLovedOnes",
    bestSeller:false
  },
  {
    id:12,
    title: 'Shooting Star',//12
    description: "A gorgeous arrangement of pearly white orchids, decorated with golden rod, baby blue eucalyptus, and papua leaves.",
    contents: `White Orchid Bouquet
    Baby Blue Eucalyptus
    Papua Leaves`,
    price: 1389.99,
    img:require( BASE_URL+"/ShootingStar.png"),
    featured: true,
    ratings:4.1, // Max is 5
    category:"ForLovedOnes",
    bestSeller:false
  },]
export const items2 =[
  {
    id:13,
    title: 'Fire Lily',//14
    description: "Celebrate love with this medley of blooms, focused around pink gerberas and Pink Lilies.",
    contents: `Unbloomed and Bloomed Pink Lilies
    Light Pink Roses
    Pink Gerberas`,
    price: 2289.99,
    img:require( BASE_URL+"/FireLily.png"),
    featured: false,
    ratings:4.5, // Max is 5
    category:"ForLovedOnes",
    bestSeller:true
  },
  {
    id:14,
    title: 'Cymbidium Red Roses',//15
    description: "Cymbidium Red Roses in Box is a Premium Box Arrangement.",
    contents: `Red Rose Bouquet
    Pink Orchids`,
    price: 1499.99,
    img:require( BASE_URL+"/CYMBIDIUMREDROSESINBOX.png"),
    featured: false,
    ratings:5.0, // Max is 5  
    category:"Congratulations",
    bestSeller:true
  },
  {
    id:15,
    title: 'Amity',//16
    description: "Send her bright yellow tulips because it's a special day, or just because you want to make her day!",
    contents: `Yellow tulips
    Pink Fillers`,
    price: 1300.00,
    img:require( BASE_URL+"/Amity.png"),
    featured: false,
    ratings:4.2, // Max is 5  
    category:"Congratulations",
    bestSeller:false
  },
  {
    id:16,
    title: 'Sweetheart',//17
    description: "The Sweetheart Bouquet impresses with lush red roses, fine baby breath and white lilies. Please someone special with this combination of premium flowers.",
    contents: `Red Rose Bouquet
    White Lilies
    White Baby Breath Fillers`,
    price: 1550.50,
    img:require( BASE_URL+"/Sweetheart.png"),
    featured: false,
    ratings:4.3, // Max is 5 
    category:"Congratulations",
    bestSeller:false
  },
  {
    id:17,
    title: 'Puffy Purple',//18
    description: " A bouquet of sweet blooms with an arrangement of hydrangeas, matthiolas, and eustomas. This purple gift will express your true admiration and infatuation - send this to that special someone and show them how special they are to you.",
    contents: `Light Purple Hydrangeas
    Royal Violet Matthiolas
    Pink Tipped Eustomas`,
    price: 1699.00,
    img:require( BASE_URL+"/PuffyPurple.png"),
    featured: false,
    ratings:4.2, // Max is 5   
    category:"Congratulations",
    bestSeller:false
  },
  {
    id:18,
    title: 'Ever After',//19
    description: " A bouquet of mixed blooms consisting of lilies, mums, and carnations arranged in a classic arm bouquet. Perfect to celebrate any occasion.",
    contents: `Pink Lilies
    Pink Mums
    Pink Carnations`,
    price: 1249.99,
    img:require( BASE_URL+"/Everafter.png"),
    featured: false,
    ratings:3.5, // Max is 5    
    category:"GeneralOccassions",
    bestSeller:false
  },
  {
    id:19,
    title: 'Purple Warmth',//20
    description: "A beautiful arrangement of pink gerberas, carnations and mums. Perfect for Valentine's day or to celebrate any occasion.",
    contents: `Pink Gerberas
    Red and White Carnations and Mums`,
    price: 1300.00,
    img:require( BASE_URL+"/Purplewarmth.png"),
    featured: false,
    ratings:4.5, // Max is 5      
    category:"GeneralOccassions",
    bestSeller:true
  },
  {
    id:20,
    title: 'Penny Mini Sunflower Bouquet',//21
    description: "Sending love should not be always expensive. Express your admiration to the one you love with this simple yet elegant bouquet of single sunflower and fillers.",
    contents:`unflower
    Purple Fillers`,
    price: 1499.50,
    img:require( BASE_URL+"/PennyMiniSunflowerBouquet.png"),
    featured: false,
    ratings:4.3, // Max is 5   
    category:"GeneralOccassions",
    bestSeller:false
  },
  {
    id:21,

    title: 'Garnet',//22
    description: "A combination of Imported Red Roses, Pink Statice and Pink Carnations, a wonderful bouquet only a Queen deserves is the perfect gift for all occasions!",
    contents: `Red Roses
    Pink Statice
    Pink Carnations`,
    price: 1249.99,
    img:require( BASE_URL+"/Garnet.png"),
    featured: false,
    ratings:4.5, // Max is 5      
    category:"GeneralOccassions",
    bestSeller:true
  },
  {
    id:22,

    title: 'Evergreen',//23
    description: "Show her pure love with evergreen bouquet. A combination of white paper roses and peach china roses wrapped in green, symbolizes growth and harmony.",
    contents: `White Paper Roses
    Peach China Roses`,
    price: 1389.99,
    img:require( BASE_URL+"/Evergreen.png"),
    featured: false,
    ratings:4.8, // Max is 5  
    category:"GeneralOccassions",
    bestSeller:true
  },
  {
    id:23,

    title: 'Belinda Tulips',//24
    description: 'Say "I Love You" with these candy sweet light pink Tulips.',
    contents: `Light Pink Tulips`,
    price: 1389.99,
    img:require( BASE_URL+"/BelindaTulips.png"),
    featured: false,
    ratings:4.3, // Max is 5  
    category:"GeneralOccassions",
    bestSeller:false
  },
  {
    id:24,

    title: 'Notting Hill',//25
    description: "This gorgeous bouquet comes with red roses, pink lilies and rose carnations wrapped in our luxurious gifting paper.",
    contents: `Lilies Bouquet
    Red Roses
    Red Carnations`,
    price: 1699.00,
    img:require(BASE_URL+"/NottingHill.png"),
    featured: true,
    ratings:4.7, // Max is 5  
    category:"ThankYouMoments",
    bestSeller:false
  },
  {
    id:25,

    title: 'Colors of Charm',//26
    description: "This Colors of Charm consists of elegantly arranged flowers in Ceramic premium Fleurs De Choix Square Vase.",
    contents: `White Roses
    Violet Tipped Lissianthus
    White Chrysanthemum
    Royal Blue Orchids`,
    price: 2299.00,
    img:require(BASE_URL+"/ColorsfoCharm.png"),
    featured: false,
    ratings:4.6, // Max is 5  
    category:"ThankYouMoments",
    bestSeller:true
  },
  {
    id:26,
    
    title: 'Divine Feminine',//27
    description: "TDivine Feminine Flower Arrangement is a Hand, Bouquet. This bouquet comes in two variants Shown and Premium.",
    contents: `Pink Roses
    Baby Pink Roses`,
    price: 1399.00,
    img:require(BASE_URL+"/DivineFeminine.png"),
    featured: false,
    ratings:4.5, // Max is 5  
    category:"ThankYouMoments",
    bestSeller:true
  }
 ];