export interface Recipe {
    id: number;
    title: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number | null;
    cookingMinutes: number | null;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    analyzedInstructions: AnalyzedInstruction[];
    spoonacularScore: number;
    spoonacularSourceUrl: string;
    license?: string;
}
  
export interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}
  
export interface Step {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
    length?: Length;
}
  
export interface Ingredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}
  
export interface Equipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}
  
export interface Length {
    number: number;
    unit: string;
}
  