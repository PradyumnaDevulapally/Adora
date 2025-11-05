import ring1gold from '../assets/ring1gold.avif'
import ring1platinum from '../assets/ring1platinum.jpg'
import ring1silver from '../assets/ring1silver.jpg'

import ring2pink from '../assets/ring2pink.png'
import ring2gold from '../assets/ring2gold.png'
import ring2grey from '../assets/ring2grey.png'

import ring3a from '../assets/ring3a.png'
import ring3b from '../assets/ring3b.png'
import ring3c from '../assets/ring3c.png'

import ring4a from '../assets/ring4a.png'
import ring4b from '../assets/ring4b.png'
import ring4c from '../assets/ring4c.png'

import ring5a from '../assets/ring5a.png'
import ring5b from '../assets/ring5b.png'
import ring5c from '../assets/ring5c.png'


// Earrings
import earring1a from '../assets/earring1a.png'
import earring1b from '../assets/earring1b.png'

import earring2a from '../assets/earring2a.png'
import earring2b from '../assets/earring2b.png'

import earring3a from '../assets/earring3a.png'
import earring3b from '../assets/earring3b.png'

import earring4a from '../assets/earring4a.png'
import earring4b from '../assets/earring4b.png'

import earring5a from '../assets/earring5a.png'
import earring5b from '../assets/earring5b.png'

//bracelets

// Bracelets
import bracelet1a from '../assets/bracelet1a.png'
import bracelet1b from '../assets/bracelet1b.png'

import bracelet2a from '../assets/bracelet2a.png'
import bracelet2b from '../assets/bracelet2b.png'

import bracelet3a from '../assets/bracelet3a.png'
import bracelet3b from '../assets/bracelet3b.png'

import bracelet4a from '../assets/bracelet4a.png'
import bracelet4b from '../assets/bracelet4b.png'

import bracelet5a from '../assets/bracelet5a.png'
import bracelet5b from '../assets/bracelet5b.png'

// Necklaces
import necklace1a from '../assets/necklace1a.png'
import necklace1b from '../assets/necklace1b.png'

import necklace2a from '../assets/necklace2a.png'
import necklace2b from '../assets/necklace2b.png'

import necklace3a from '../assets/necklace3a.png'
import necklace3b from '../assets/necklace3b.png'

import necklace4a from '../assets/necklace4a.png'
import necklace4b from '../assets/necklace4b.png'

import necklace5a from '../assets/necklace5a.png'
import necklace5b from '../assets/necklace5b.png'

// Anklets
import anklet1a from '../assets/anklet1a.png'
import anklet1b from '../assets/anklet1b.png'

import anklet2a from '../assets/anklet2a.png'
import anklet2b from '../assets/anklet2b.png'

import anklet3a from '../assets/anklet3a.png'
import anklet3b from '../assets/anklet3b.png'

import anklet4a from '../assets/anklet4a.png'
import anklet4b from '../assets/anklet4b.png'

import anklet5a from '../assets/anklet5a.png'
import anklet5b from '../assets/anklet5b.png'






export const products = [
  // Rings
  {
    id: 1,
    name: "Eterna Bloom",
    category: "Ring",
    multiplier: 1.2,
    colors: ["#D4AF37", "#C0C0C0", "#E5E4E2"],
    images: {
      "#D4AF37": ring1gold,
      "#C0C0C0": ring1platinum,
      "#E5E4E2": ring1silver
    },
  },
  {
    id: 2,
    name: "Lumine Band",
    category: "Ring",
    multiplier: 1.4,
    colors: ["#FFD1DC", "#E8C547", "#C2B2A3"],
    images: {
      "#FFD1DC": ring2pink,
      "#E8C547": ring2gold,
      "#C2B2A3": ring2grey,
      
    },
  },
  {
    id: 3,
    name: "Celestia Ring",
    category: "Ring",
    multiplier: 1.6,
    colors: ["#FADADD", "#FFEFD5", "#E6E6FA"],
    images: {
      "#FADADD": ring3a,
      "#FFEFD5": ring3b,
      "#E6E6FA": ring3c
    },
  },

{
  id: 4,
  name: "Aurum Grace",
  category: "Ring",
  multiplier: 1.2,
  colors: ["#D4AF37", "#1A1A1A", "#F5F5F5"],
  images: {
    "#D4AF37": ring4a,      // gold
    "#1A1A1A": ring4b,     // dark / onyx
    "#F5F5F5": ring4c,     // bright / silver-white
  },

},
{
  id: 5,
  name: "Velora Halo",
  category: "Ring",
  multiplier: 1.4,
  colors: ["#A7C7E7", "#5DA3FA", "#E0F7FA"],
  images: {
    "#A7C7E7": ring5a,       // soft blue
    "#5DA3FA": ring5b,  // vivid blue
    "#E0F7FA": ring5c,      // light aqua
  },
},

// Earrings
{
  id: 6,
  name: "Luna Drops",
  category: "Earring",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": earring1a,
    "#C0C0C0": earring1b,
  },
},
{
  id: 7,
  name: "Aurielle Hoops",
  category: "Earring",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": earring2a,
    "#C0C0C0": earring2b,
  },
},
{
  id: 8,
  name: "Solara Studs",
  category: "Earring",
  multiplier: 1.6,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": earring3a,
    "#C0C0C0": earring3b,
  },
},
{
  id: 9,
  name: "Eclat Bloom",
  category: "Earring",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": earring4a,
    "#C0C0C0": earring4b,
  },
},
{
  id: 10,
  name: "Velin Arc",
  category: "Earring",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": earring5a,
    "#C0C0C0": earring5b,
  },
},

// Bracelets
{
  id: 11,
  name: "Seren Chain",
  category: "Bracelet",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": bracelet1a,
    "#C0C0C0": bracelet1b,
  },
},
{
  id: 12,
  name: "Celene Crest",
  category: "Bracelet",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": bracelet2a,
    "#C0C0C0": bracelet2b,
  },
},
{
  id: 13,
  name: "Amara Strand",
  category: "Bracelet",
  multiplier: 1.6,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": bracelet3a,
    "#C0C0C0": bracelet3b,
  },
},
{
  id: 14,
  name: "Aurelia Link",
  category: "Bracelet",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": bracelet4a,
    "#C0C0C0": bracelet4b,
  },
},
{
  id: 15,
  name: "Lyra Charm",
  category: "Bracelet",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": bracelet5a,
    "#C0C0C0": bracelet5b,
  },
},


// Necklaces
{
  id: 16,
  name: "Eterna Loop",
  category: "Necklace",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": necklace1a,
    "#C0C0C0": necklace1b,
  },
},
{
  id: 17,
  name: "Velisse Cuff",
  category: "Necklace",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": necklace2a,
    "#C0C0C0": necklace2b,
  },
},
{
  id: 18,
  name: "Aurevo Band",
  category: "Necklace",
  multiplier: 1.6,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": necklace3a,
    "#C0C0C0": necklace3b,
  },
},
{
  id: 19,
  name: "Lunara Twist",
  category: "Necklace",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": necklace4a,
    "#C0C0C0": necklace4b,
  },
},
{
  id: 20,
  name: "Solenne Chain",
  category: "Necklace",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": necklace5a,
    "#C0C0C0": necklace5b,
  },
},


// Anklets
{
  id: 21,
  name: "Maris Chain",
  category: "Anklet",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": anklet1a,
    "#C0C0C0": anklet1b,
  },
},
{
  id: 22,
  name: "Selene Trail",
  category: "Anklet",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": anklet2a,
    "#C0C0C0": anklet2b,
  },
},
{
  id: 23,
  name: "AuriLace",
  category: "Anklet",
  multiplier: 1.6,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": anklet3a,
    "#C0C0C0": anklet3b,
  },
},
{
  id: 24,
  name: "Nivara Loop",
  category: "Anklet",
  multiplier: 1.2,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": anklet4a,
    "#C0C0C0": anklet4b,
  },
},
{
  id: 25,
  name: "Tierra Tinkle",
  category: "Anklet",
  multiplier: 1.4,
  colors: ["#D4AF37", "#C0C0C0"],
  images: {
    "#D4AF37": anklet5a,
    "#C0C0C0": anklet5b,
  },
},

];
