export type Permessi = "Admin" | "Utente" | "Venditore" | "Solo Lettura";

export type RowsType = {
  id: number;
  fullName: string;
  email: string;
  checked: boolean;
  permessi: Permessi;
};

export const rows: RowsType[] = [
  {
    id: 1,
    fullName: "Michele Cimmino",
    email: "michele.cimmino@lastingdynamics.com",
    checked: false,
    permessi: "Admin",
  },
  {
    id: 2,
    fullName: "Marino Panariello",
    email: "marino.panariello@lastingdynamics.com",
    checked: false,
    permessi: "Utente",
  },
  {
    id: 3,
    fullName: "Vincenzo Lavorante",
    email: "vincenzo.lavorante@lastingdynamics.com",
    checked: false,
    permessi: "Venditore",
  },
  {
    id: 4,
    fullName: "Antonio Langella",
    email: "antonio.langella@lastingdynamics.com",
    checked: false,
    permessi: "Solo Lettura",
  },
  {
    id: 5,
    fullName: "Alessandro Durni",
    email: "a.durni@lastingdynamics.com",
    checked: false,
    permessi: "Venditore",
  },
  {
    id: 6,
    fullName: "Andrea",
    email: "andrea@coraly.com",
    checked: false,
    permessi: "Venditore",
  },
  {
    id: 7,
    fullName: "Francesco",
    email: "francesco@coraly",
    checked: false,
    permessi: "Utente",
  },
];
