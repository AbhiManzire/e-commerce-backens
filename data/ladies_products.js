const ladiesProducts = [
  // LADIES SPORT PRODUCTS
  {
    "name": "Ladies' Athletic Sports Bra",
    "brand": "YOUTH CIRCLE",
    "description": "High-support sports bra for active women. Features moisture-wicking fabric and comfortable fit for all types of workouts.",
    "price": 35,
    "originalPrice": 50,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "ladies-sport",
    "sizes": [
      {"size": "XS", "stock": 15},
      {"size": "S", "stock": 20},
      {"size": "M", "stock": 25},
      {"size": "L", "stock": 18},
      {"size": "XL", "stock": 12}
    ],
    "colors": ["Black", "White", "Pink", "Navy"],
    "inStock": true,
    "featured": true,
    "rating": 4.5,
    "numReviews": 89,
    "tags": ["Ladies", "Sport", "Bra", "Athletic"]
  },
  {
    "name": "Ladies' Yoga Leggings",
    "brand": "YOUTH CIRCLE",
    "description": "High-waisted yoga leggings with stretchy fabric. Perfect for yoga, gym, and casual wear with comfortable fit.",
    "price": 45,
    "originalPrice": 65,
    "images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    "category": "ladies-sport",
    "sizes": [
      {"size": "XS", "stock": 12},
      {"size": "S", "stock": 18},
      {"size": "M", "stock": 22},
      {"size": "L", "stock": 20},
      {"size": "XL", "stock": 15}
    ],
    "colors": ["Black", "Navy", "Pink", "Gray"],
    "inStock": true,
    "featured": true,
    "rating": 4.6,
    "numReviews": 95,
    "tags": ["Ladies", "Sport", "Leggings", "Yoga"]
  },
  {
    "name": "Ladies' Running Shorts",
    "brand": "YOUTH CIRCLE",
    "description": "Lightweight running shorts with built-in briefs. Perfect for running, jogging, and outdoor activities.",
    "price": 28,
    "originalPrice": 40,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "ladies-sport",
    "sizes": [
      {"size": "XS", "stock": 10},
      {"size": "S", "stock": 15},
      {"size": "M", "stock": 20},
      {"size": "L", "stock": 18},
      {"size": "XL", "stock": 12}
    ],
    "colors": ["Black", "Navy", "Pink", "White"],
    "inStock": true,
    "featured": false,
    "rating": 4.4,
    "numReviews": 67,
    "tags": ["Ladies", "Sport", "Shorts", "Running"]
  },
  {
    "name": "Ladies' Workout Tank Top",
    "brand": "YOUTH CIRCLE",
    "description": "Breathable workout tank top with moisture-wicking technology. Perfect for gym sessions and outdoor workouts.",
    "price": 25,
    "originalPrice": 35,
    "images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    "category": "ladies-sport",
    "sizes": [
      {"size": "XS", "stock": 12},
      {"size": "S", "stock": 18},
      {"size": "M", "stock": 25},
      {"size": "L", "stock": 20},
      {"size": "XL", "stock": 15}
    ],
    "colors": ["Black", "White", "Pink", "Navy"],
    "inStock": true,
    "featured": false,
    "rating": 4.3,
    "numReviews": 78,
    "tags": ["Ladies", "Sport", "Tank Top", "Workout"]
  },
  {
    "name": "Ladies' Sports Jacket",
    "brand": "YOUTH CIRCLE",
    "description": "Lightweight sports jacket with zip-up design. Perfect for outdoor activities and layering during workouts.",
    "price": 55,
    "originalPrice": 75,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "ladies-sport",
    "sizes": [
      {"size": "XS", "stock": 8},
      {"size": "S", "stock": 12},
      {"size": "M", "stock": 18},
      {"size": "L", "stock": 15},
      {"size": "XL", "stock": 10}
    ],
    "colors": ["Black", "Navy", "Pink", "Gray"],
    "inStock": true,
    "featured": true,
    "rating": 4.7,
    "numReviews": 82,
    "tags": ["Ladies", "Sport", "Jacket", "Outdoor"]
  },

  // LADIES CLOTHING PRODUCTS
  {
    "name": "Ladies' Summer Dress",
    "brand": "YOUTH CIRCLE",
    "description": "Elegant summer dress with floral pattern. Perfect for casual outings, parties, and special occasions.",
    "price": 65,
    "originalPrice": 85,
    "images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    "category": "ladies-clothing",
    "sizes": [
      {"size": "XS", "stock": 10},
      {"size": "S", "stock": 15},
      {"size": "M", "stock": 20},
      {"size": "L", "stock": 18},
      {"size": "XL", "stock": 12}
    ],
    "colors": ["Floral", "Blue", "Pink", "White"],
    "inStock": true,
    "featured": true,
    "rating": 4.6,
    "numReviews": 94,
    "tags": ["Ladies", "Clothing", "Dress", "Summer"]
  },
  {
    "name": "Ladies' Casual Blouse",
    "brand": "YOUTH CIRCLE",
    "description": "Comfortable casual blouse with button-down design. Perfect for office wear and casual outings.",
    "price": 45,
    "originalPrice": 60,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "ladies-clothing",
    "sizes": [
      {"size": "XS", "stock": 12},
      {"size": "S", "stock": 18},
      {"size": "M", "stock": 22},
      {"size": "L", "stock": 20},
      {"size": "XL", "stock": 15}
    ],
    "colors": ["White", "Blue", "Pink", "Black"],
    "inStock": true,
    "featured": false,
    "rating": 4.4,
    "numReviews": 76,
    "tags": ["Ladies", "Clothing", "Blouse", "Casual"]
  },
  {
    "name": "Ladies' Denim Jeans",
    "brand": "YOUTH CIRCLE",
    "description": "Classic denim jeans with comfortable fit. Perfect for casual wear and everyday activities.",
    "price": 55,
    "originalPrice": 75,
    "images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    "category": "ladies-clothing",
    "sizes": [
      {"size": "XS", "stock": 10},
      {"size": "S", "stock": 15},
      {"size": "M", "stock": 20},
      {"size": "L", "stock": 18},
      {"size": "XL", "stock": 12}
    ],
    "colors": ["Blue", "Black", "White", "Gray"],
    "inStock": true,
    "featured": true,
    "rating": 4.5,
    "numReviews": 88,
    "tags": ["Ladies", "Clothing", "Jeans", "Denim"]
  },
  {
    "name": "Ladies' Cardigan Sweater",
    "brand": "YOUTH CIRCLE",
    "description": "Cozy cardigan sweater with button-down design. Perfect for layering and keeping warm during cooler weather.",
    "price": 50,
    "originalPrice": 70,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "ladies-clothing",
    "sizes": [
      {"size": "XS", "stock": 8},
      {"size": "S", "stock": 12},
      {"size": "M", "stock": 18},
      {"size": "L", "stock": 15},
      {"size": "XL", "stock": 10}
    ],
    "colors": ["Gray", "Black", "Pink", "Navy"],
    "inStock": true,
    "featured": false,
    "rating": 4.3,
    "numReviews": 72,
    "tags": ["Ladies", "Clothing", "Cardigan", "Sweater"]
  },
  {
    "name": "Ladies' Formal Blazer",
    "brand": "YOUTH CIRCLE",
    "description": "Professional blazer for formal occasions. Perfect for office wear, meetings, and business events.",
    "price": 85,
    "originalPrice": 120,
    "images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    "category": "ladies-clothing",
    "sizes": [
      {"size": "XS", "stock": 6},
      {"size": "S", "stock": 10},
      {"size": "M", "stock": 15},
      {"size": "L", "stock": 12},
      {"size": "XL", "stock": 8}
    ],
    "colors": ["Black", "Navy", "Gray", "White"],
    "inStock": true,
    "featured": true,
    "rating": 4.8,
    "numReviews": 96,
    "tags": ["Ladies", "Clothing", "Blazer", "Formal"]
  },

  // LADIES ACCESSORIES PRODUCTS
  {
    "name": "Ladies' Designer Handbag",
    "brand": "YOUTH CIRCLE",
    "description": "Elegant designer handbag with multiple compartments. Perfect for daily use and special occasions.",
    "price": 75,
    "originalPrice": 100,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&h=500&fit=crop"
    ],
    "category": "ladies-accessories",
    "sizes": [
      {"size": "One Size", "stock": 25}
    ],
    "colors": ["Black", "Brown", "Tan", "Burgundy"],
    "inStock": true,
    "featured": true,
    "rating": 4.7,
    "numReviews": 89,
    "tags": ["Ladies", "Accessories", "Handbag", "Designer"]
  },
  {
    "name": "Ladies' Pearl Jewelry Set",
    "brand": "YOUTH CIRCLE",
    "description": "Beautiful pearl jewelry set including necklace, earrings, and bracelet. Perfect for elegant occasions.",
    "price": 65,
    "originalPrice": 90,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop"
    ],
    "category": "ladies-accessories",
    "sizes": [
      {"size": "One Size", "stock": 30}
    ],
    "colors": ["Pearl", "Gold", "Silver", "Rose Gold"],
    "inStock": true,
    "featured": true,
    "rating": 4.8,
    "numReviews": 102,
    "tags": ["Ladies", "Accessories", "Jewelry", "Pearl"]
  },
  {
    "name": "Ladies' Silk Scarf",
    "brand": "YOUTH CIRCLE",
    "description": "Luxurious silk scarf with beautiful patterns. Perfect for adding elegance to any outfit.",
    "price": 35,
    "originalPrice": 50,
    "images": [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
    ],
    "category": "ladies-accessories",
    "sizes": [
      {"size": "One Size", "stock": 40}
    ],
    "colors": ["Floral", "Geometric", "Solid", "Striped"],
    "inStock": true,
    "featured": false,
    "rating": 4.5,
    "numReviews": 78,
    "tags": ["Ladies", "Accessories", "Scarf", "Silk"]
  },
  {
    "name": "Ladies' Designer Sunglasses",
    "brand": "YOUTH CIRCLE",
    "description": "Stylish designer sunglasses with UV protection. Perfect for sunny days and fashion statements.",
    "price": 60,
    "originalPrice": 85,
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f2815039?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f2815039?w=500&h=500&fit=crop"
    ],
    "category": "ladies-accessories",
    "sizes": [
      {"size": "One Size", "stock": 20}
    ],
    "colors": ["Black", "Brown", "Gold", "Silver"],
    "inStock": true,
    "featured": true,
    "rating": 4.6,
    "numReviews": 85,
    "tags": ["Ladies", "Accessories", "Sunglasses", "Designer"]
  },
  {
    "name": "Ladies' Elegant Watch",
    "brand": "YOUTH CIRCLE",
    "description": "Elegant ladies watch with leather strap. Perfect for both casual and formal occasions.",
    "price": 95,
    "originalPrice": 130,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    ],
    "category": "ladies-accessories",
    "sizes": [
      {"size": "One Size", "stock": 15}
    ],
    "colors": ["Gold", "Silver", "Rose Gold", "Black"],
    "inStock": true,
    "featured": true,
    "rating": 4.9,
    "numReviews": 108,
    "tags": ["Ladies", "Accessories", "Watch", "Elegant"]
  },

  // LADIES LINGERIE PRODUCTS
  {
    "name": "Ladies' Lace Bra Set",
    "brand": "YOUTH CIRCLE",
    "description": "Beautiful lace bra set with matching panties. Features comfortable fit and elegant design.",
    "price": 40,
    "originalPrice": 60,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "lingerie",
    "sizes": [
      {"size": "XS", "stock": 12},
      {"size": "S", "stock": 18},
      {"size": "M", "stock": 22},
      {"size": "L", "stock": 20},
      {"size": "XL", "stock": 15}
    ],
    "colors": ["Black", "White", "Nude", "Pink"],
    "inStock": true,
    "featured": true,
    "rating": 4.6,
    "numReviews": 92,
    "tags": ["Ladies", "Lingerie", "Bra Set", "Lace"]
  },
  {
    "name": "Ladies' Silk Nightwear Set",
    "brand": "YOUTH CIRCLE",
    "description": "Luxurious silk nightwear set with comfortable fit. Perfect for a good night's sleep.",
    "price": 70,
    "originalPrice": 95,
    "images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    "category": "lingerie",
    "sizes": [
      {"size": "XS", "stock": 10},
      {"size": "S", "stock": 15},
      {"size": "M", "stock": 20},
      {"size": "L", "stock": 18},
      {"size": "XL", "stock": 12}
    ],
    "colors": ["Black", "Navy", "Burgundy", "Emerald"],
    "inStock": true,
    "featured": true,
    "rating": 4.7,
    "numReviews": 87,
    "tags": ["Ladies", "Lingerie", "Nightwear", "Silk"]
  },
  {
    "name": "Ladies' Comfortable Underwear Set",
    "brand": "YOUTH CIRCLE",
    "description": "Comfortable cotton underwear set with soft fabric. Perfect for everyday wear.",
    "price": 25,
    "originalPrice": 35,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "lingerie",
    "sizes": [
      {"size": "XS", "stock": 25},
      {"size": "S", "stock": 30},
      {"size": "M", "stock": 35},
      {"size": "L", "stock": 28},
      {"size": "XL", "stock": 20}
    ],
    "colors": ["Black", "White", "Nude", "Pink"],
    "inStock": true,
    "featured": false,
    "rating": 4.4,
    "numReviews": 98,
    "tags": ["Ladies", "Lingerie", "Underwear", "Comfortable"]
  },
  {
    "name": "Ladies' Lace Bodysuit",
    "brand": "YOUTH CIRCLE",
    "description": "Elegant lace bodysuit with flattering fit. Perfect for special occasions and intimate moments.",
    "price": 55,
    "originalPrice": 80,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    "category": "lingerie",
    "sizes": [
      {"size": "XS", "stock": 8},
      {"size": "S", "stock": 12},
      {"size": "M", "stock": 18},
      {"size": "L", "stock": 15},
      {"size": "XL", "stock": 10}
    ],
    "colors": ["Black", "White", "Red", "Nude"],
    "inStock": true,
    "featured": true,
    "rating": 4.8,
    "numReviews": 84,
    "tags": ["Ladies", "Lingerie", "Bodysuit", "Lace"]
  },
  {
    "name": "Ladies' Sleepwear Set",
    "brand": "YOUTH CIRCLE",
    "description": "Comfortable sleepwear set with soft fabric. Perfect for a restful night's sleep.",
    "price": 45,
    "originalPrice": 65,
    "images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    "category": "lingerie",
    "sizes": [
      {"size": "XS", "stock": 12},
      {"size": "S", "stock": 18},
      {"size": "M", "stock": 22},
      {"size": "L", "stock": 20},
      {"size": "XL", "stock": 15}
    ],
    "colors": ["Black", "White", "Pink", "Navy"],
    "inStock": true,
    "featured": false,
    "rating": 4.5,
    "numReviews": 76,
    "tags": ["Ladies", "Lingerie", "Sleepwear", "Comfortable"]
  }
];

module.exports = ladiesProducts;
