// Car data (you can expand this)
const carData = {
  toyota: {
    camry: {
      variants: ["LE", "SE", "XLE", "XSE"],
      prices: {
        LE: "$25,295",
        SE: "$27,095",
        XLE: "$30,645",
        XSE: "$31,645",
      },
      image: "./images/camry.png",
    },
    corolla: {
      variants: ["L", "LE", "SE", "XLE"],
      prices: {
        L: "$20,425",
        LE: "$21,875",
        SE: "$23,625",
        XLE: "$25,925",
      },
      image: "./images/corolla.png",
    },
  },

  honda: {
    civic: {
      variants: ["LX", "Sport", "EX", "Touring"],
      prices: {
        LX: "$22,545",
        Sport: "$24,545",
        EX: "$26,545",
        Touring: "$30,545",
      },
      image: "./images/civic.png",
    },
    accord: {
      variants: ["LX", "Sport", "EX_L", "Touring"],
      prices: {
        LX: "$28,390",
        Sport: "$31,890",
        EX_L: "$33,540",
        Touring: "$38,540",
      },
      image: "./images/accord.png",
    },
  },

  bmw: {
    series3: {
      variants: ["330i", "330e", "M340i"],
      prices: {
        "330i": "$44,500",
        "330e": "$45,600",
        "M340i": "$57,600",
      },
      image: "./images/3.png",
    },
    series5: {
      variants: ["530i", "540i", "M550i"],
      prices: {
        "530i": "$57,900",
        "540i": "$62,700",
        "M550i": "$80,200",
      },
      image: "./images/5.png",
    },
  },

  audi: {
    a4: {
      variants: ["Premium", "PremiumPlus", "Prestige"],
      prices: {
        Premium: "$41,200",
        PremiumPlus: "$46,300",
        Prestige: "$51,300",
      },
      image: "./images/a4.png",
    },
    a6: {
      variants: ["Premium", "PremiumPlus", "Prestige"],
      prices: {
        Premium: "$56,800",
        PremiumPlus: "$60,900",
        Prestige: "$69,200",
      },
      image: "./images/a6.png",
    },
  },

  mercedes: {
    cClass: {
      variants: ["C300", "C300 4Matic", "AMG C43"],
      prices: {
        C300: "$46,950",
        "C300 4Matic": "$48,950",
        "AMG C43": "$60,500",
      },
      image: "./images/C.png",
    },
    eClass: {
      variants: ["E350", "E350 4Matic", "AMG E53"],
      prices: {
        E350: "$56,750",
        "E350 4Matic": "$58,750",
        "AMG E53": "$79,800",
      },
      image: "./images/E.png",
    },
  },
};


// Get DOM elements
const companySelect = document.getElementById("carCompany");
const modelSelect = document.getElementById("carModel");
const variantSelect = document.getElementById("carVariant");
const searchBtn = document.getElementById("searchBtn");
const carResults = document.getElementById("carResults");

// Event listeners
companySelect.addEventListener("change", updateModels);
modelSelect.addEventListener("change", updateVariants);
searchBtn.addEventListener("click", displayCar);

function updateModels() {
  const company = companySelect.value;
  modelSelect.innerHTML = '<option value="">Select Model</option>';
  variantSelect.innerHTML = '<option value="">Select Variant</option>';

  if (company && carData[company]) {
    for (let model in carData[company]) {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
      modelSelect.appendChild(option);
    }
  }
}

function updateVariants() {
  const company = companySelect.value;
  const model = modelSelect.value;
  variantSelect.innerHTML = '<option value="">Select Variant</option>';

  if (company && model && carData[company][model]) {
    carData[company][model].variants.forEach((variant) => {
      const option = document.createElement("option");
      option.value = variant;
      option.textContent = variant;
      variantSelect.appendChild(option);
    });
  }
}

function displayCar() {
  const company = companySelect.value;
  const model = modelSelect.value;
  const variant = variantSelect.value;

  if (!company || !model || !variant) {
    alert("Please select all options");
    return;
  }

  const carInfo = carData[company][model];
  const price = carInfo.prices[variant];

  const carCard = `
        <div class="car-card">
            <div class="car-image">
                <img src="${
                  carInfo.image || "placeholder.jpg"
                }" alt="${company} ${model}"height="100">
            </div>
            <div class="car-info">
                <span class="car-year">2025</span>
                <h3 class="car-name">${company.toUpperCase()} ${model.toUpperCase()}</h3>
                <p class="car-category">${variant} Variant</p>
                <div class="car-price">${price}</div>
                <div class="car-specs">
                    <span>Automatic</span>
                    <span>4 Seats</span>
                    <span>Petrol</span>
                </div>
                <div class="car-actions">
                    <button class="view-details">View Details</button>
                    <button class="contact-seller">Contact Seller</button>
                </div>
            </div>
        </div>
    `;

  carResults.innerHTML = carCard;
}
