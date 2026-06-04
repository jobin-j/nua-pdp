const variants = {
  1: {
    images: [
      'https://picsum.photos/400/500?random=1',
      'https://picsum.photos/400/500?random=2',
      'https://picsum.photos/400/500?random=3',
    ],
    colours: ["Black", "Olive", "Navy"],
    sizes: [
      { label: "S", stock: 5 },
      { label: "M", stock: 2 },
      { label: "L", stock: 0 },
      { label: "XL", stock: 8 },
    ],
    salePrice: 89.95
  },
  2: {
    images: [
      'https://picsum.photos/400/500?random=4',
      'https://picsum.photos/400/500?random=5',
      'https://picsum.photos/400/500?random=6',
    ],
    colours: ["White", "Grey"],
    sizes: [
      { label: "S", stock: 0 },
      { label: "M", stock: 4 },
      { label: "L", stock: 2 },
      { label: "XL", stock: 1 },
    ],
  },
  3: {
    images: [
      'https://picsum.photos/400/500?random=7',
      'https://picsum.photos/400/500?random=8',
      'https://picsum.photos/400/500?random=9',
    ],
    colours: ["Red", "Black", "Blue"],
    sizes: [
      { label: "S", stock: 6 },
      { label: "M", stock: 0 },
      { label: "L", stock: 3 },
      { label: "XL", stock: 2 },
    ],
    salePrice: 49.95
  }
};

export default variants;