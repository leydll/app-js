import Alpine from "./node_modules/alpinejs/dist/module.esm.js";

window.Alpine = Alpine;

Alpine.data("login", () => ({
  registeredUsers: [
    { email: "test@example.com", password: "Password.123" },
    { email: "leila@gmail.com", password: "Mypassword1*" },
  ],

  fields: [
    {
      name: "email",
      type: "email",
      placeholder: "Entrez votre email",
      value: "",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Entrez votre mot de passe",
      value: "",
    },
  ],
  showPopup: false,
  popupMessage: "",

  submitHandler() {
    // vérifier si les champs sont vides
    const emailField = this.fields.find((field) => field.name === "email");
    const passwordField = this.fields.find(
      (field) => field.name === "password"
    );

    if (!emailField.value || !passwordField.value) {
      this.popupMessage = "Veuillez remplir tous les champs.";
      this.showPopup = true;
      return;
    }

    const user = this.registeredUsers.find(
      (user) =>
        user.email === emailField.value && user.password === passwordField.value
    );

    if (user) {
      // redirection vers la page d'accueil si l'utilisateur est trouvé
      window.location.href = "accueil.html";
    } else {
      this.popupMessage = "Identifiants incorrects.";
      this.showPopup = true;
    }
  },
}));

Alpine.data("inscription", () => ({
  showPopup: false,
  popupMessage: "",
  fields: [
    {
      name: "nom",
      type: "text",
      placeholder: "Entrez votre nom",
    },
    {
      name: "prénom",
      type: "text",
      placeholder: "Entrez votre prénom",
    },
    {
      name: "nom d'utilisateur",
      type: "text",
      placeholder: "Entrez votre nom d'utilisateur",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Entrez votre email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Entrez votre mot de passe",
    },
  ],

  submitHandler(event) {
    event.preventDefault();

    const emailValue = document.getElementById("email").value;
    const passwordValue = document.querySelector("#password").value;
    const nomUserValue = document.getElementById("nom d'utilisateur").value;
    const nomValue = document.getElementById("nom").value;
    const prenomValue = document.getElementById("prénom").value;

    if (
      !(emailValue && passwordValue && nomUserValue && nomValue && prenomValue)
    ) {
      this.showPopup = true;
      this.popupMessage = "Veuillez compléter le formulaire.";
      return;
    }

    const emailPattern =
      /^[a-zA-Z0-9._%+-]{3,15}@[a-zA-Z0-9.-]{2,10}\.[a-zA-Z]{2,3}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;

    if (!emailPattern.test(emailValue)) {
      this.showPopup = true;
      this.popupMessage = "email invalide. Format attendu : exemple@domaine.fr";
      return;
    }
    if (!passwordPattern.test(passwordValue)) {
      this.showPopup = true;
      this.popupMessage =
        "mot de passe invalide. Minimum 8 caractères, au moins une majuscule, une minuscule, un chiffre et un caractère spécial.";
      return;
    }
    if (!usernamePattern.test(nomUserValue)) {
      this.showPopup = true;
      this.popupMessage =
        "nom d'utilisateur invalide. 3 à 15 caractères, uniquement lettres et chiffres.";
      return;
    }
    this.showPopup = true;
    this.popupMessage = "Inscription réussie !";
    console.log("Inscription réussie !");
    window.location.href = "/login.html";
  },
}));

document.addEventListener("alpine:init", () => {
  Alpine.data("ProductList", () => ({
    isLoggedIn: true,
    products: [
      {
        name: "Fond de teint",
        category: "maquillage",
        price: 30,
        description: "Fond de teint longue durée, couvrance parfaite.",
      },
      {
        name: "Crème hydratante",
        category: "skincare",
        price: 25,
        description: "Crème hydratante pour peaux sèches.",
      },
      {
        name: "Rouge à lèvres",
        category: "maquillage",
        price: 15,
        description: "Rouge à lèvres hydratant, fini mat.",
      },
      {
        name: "Sérum anti-âge",
        category: "skincare",
        price: 50,
        description: "Sérum pour réduire les rides et ridules.",
      },
      {
        name: "Poudre matifiante",
        category: "maquillage",
        price: 20,
        description: "Poudre compacte pour un fini mat toute la journée.",
      },
      {
        name: "Crème de nuit réparatrice",
        category: "skincare",
        price: 45,
        description: "Crème réparatrice pour la peau pendant la nuit.",
      },
      {
        name: "Masque hydratant",
        category: "skincare",
        price: 35,
        description: "Masque en tissu hydratant pour peau sèche.",
      },
      {
        name: "Sérum éclat",
        category: "skincare",
        price: 40,
        description: "Sérum éclaircissant pour un teint lumineux.",
      },
      {
        name: "Mascara volume",
        category: "maquillage",
        price: 18,
        description:
          "Mascara volumisant pour des cils plus longs et plus épais.",
      },
      {
        name: "Blush crème",
        category: "maquillage",
        price: 22,
        description: "Blush crème pour un effet bonne mine.",
      },
      {
        name: "Crème solaire SPF 50",
        category: "skincare",
        price: 28,
        description: "Crème solaire haute protection pour peau sensible.",
      },
      {
        name: "Fond de teint lumineux",
        category: "maquillage",
        price: 33,
        description: "Fond de teint léger et lumineux, effet peau parfaite.",
      },
      {
        name: "Démaquillant doux",
        category: "skincare",
        price: 18,
        description: "Démaquillant doux pour peau sensible.",
      },
      {
        name: "Exfoliant doux",
        category: "skincare",
        price: 25,
        description: "Exfoliant doux pour un teint éclatant.",
      },
      {
        name: "Parfum floral",
        category: "maquillage",
        price: 55,
        description: "Parfum floral, notes de jasmin et de rose.",
      },
      {
        name: "Gel nettoyant",
        category: "skincare",
        price: 20,
        description: "Gel nettoyant doux pour un nettoyage en profondeur.",
      },
      {
        name: "Palette de fards à paupières",
        category: "maquillage",
        price: 45,
        description:
          "Palette de 12 teintes pour un maquillage des yeux parfait.",
      },
      {
        name: "Crème contour des yeux",
        category: "skincare",
        price: 30,
        description: "Crème anti-poches et anti-cernes.",
      },
      {
        name: "Rouge à lèvres mat",
        category: "maquillage",
        price: 25,
        description: "Rouge à lèvres mat, longue tenue.",
      },
      {
        name: "Lotion tonique",
        category: "skincare",
        price: 22,
        description: "Lotion tonique apaisante pour peau sèche.",
      },
      {
        name: "Crème anti-imperfections",
        category: "skincare",
        price: 40,
        description: "Crème traitant les imperfections et les boutons.",
      },
      {
        name: "Gel douche hydratant",
        category: "skincare",
        price: 18,
        description: "Gel douche hydratant et nourrissant.",
      },
      {
        name: "Huiles essentielles relaxantes",
        category: "skincare",
        price: 35,
        description: "Huile essentielle pour apaiser et relaxer.",
      },
      {
        name: "Crème matifiante",
        category: "skincare",
        price: 28,
        description: "Crème matifiante pour peau grasse.",
      },
    ],

    selectedCategory: null, // variable pour filtrer les produits par catégorie (maquillage, skincare)

    // fonction pour filtrer les produits en fonction de la catégorie choisie
    get filteredProducts() {
      if (this.selectedCategory === null) {
        return this.products; // si aucune catégorie choisie, affiche tous les produits
      }
      return this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    },

    // fonction pour calculer le prix total des produits filtrés
    totalPrice() {
      let total = 0;
      this.filteredProducts.forEach((product) => {
        total += product.price; // additionne les prix des produits filtrés
      });
      return total.toFixed(2); // retourne le total avec deux décimales
    },

    logout() {
      this.isLoggedIn = false; // Déconnecter l'utilisateur
      window.location.href = "/login.html"; // Rediriger vers la page de connexion
    },
  }));
});

Alpine.start(); // démarre Alpine.js
