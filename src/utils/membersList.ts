export type RowsType = {
  id: number;
  fullName: string;
  email: string;
  permessi: string;
  checked: boolean;
};

export const rows: RowsType[] = [
  {
    id: 1,
    fullName: "Michele Cimmino",
    email: "michele.cimmino@lastingdynamics.com",
    permessi: "Admin",
    checked: false,
  },
  {
    id: 2,
    fullName: "Marino Panariello",
    email: "marino.panariello@lastingdynamics.com",
    permessi: "Utente",
    checked: false,
  },
  {
    id: 3,
    fullName: "Vincenzo Lavorante",
    email: "vincenzo.lavorante@lastingdynamics.com",
    permessi: "Venditore",
    checked: false,
  },
  {
    id: 4,
    fullName: "Antonio Langella",
    email: "antonio.langella@lastingdynamics.com",
    permessi: "Solo Lettura",
    checked: false,
  },
  {
    id: 5,
    fullName: "Alessandro Durni",
    email: "a.durni@lastingdynamics.com",
    permessi: "Venditore",
    checked: false,
  },
  {
    id: 6,
    fullName: "Andrea",
    email: "andrea@coraly.com",
    permessi: "Venditore",
    checked: false,
  },
  {
    id: 7,
    fullName: "Francesco",
    email: "francesco@coraly",
    permessi: "Utente  ",
    checked: false,
  },
];
