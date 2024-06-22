const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: [
        { id: 9001, size: "small" },
        { id: 9002, size: "medium" },
        { id: 9003, size: "large" },
        { id: 9004, size: "extra large" },
      ],
    };
  },
});
