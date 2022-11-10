import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TdService {
  partyScores: any

  getTds() {
    return TDS;
  }

  getTd(name: string) {
    return TDS.find((td) => td.name === name);
  }

  getPartyScore(partyName: string) {
    return this.partyScores[partyName].positivePercent
  }

  constructor() {
    // calculate party scores
    this.partyScores = {}
    TDS.forEach((td) => {
      let partyScore = this.partyScores[td.partyName] = this.partyScores[td.partyName] || {
        tdCount: 0,
        positiveVotes: 0
      }

      partyScore.tdCount++
      if(td.score === 'positive') {
        partyScore.positiveVotes++
      }
    })

    // calculate percent scores
    Object.keys(this.partyScores).forEach((partyName) => {
      this.partyScores[partyName].positivePercent = this.partyScores[partyName].positiveVotes * 100 / this.partyScores[partyName].tdCount
    })

    console.log("calculated party scores:", this.partyScores)
  }
}

const TDS = [
  {
    name: "Alan Dillon",
    imageUrl: "./assets/images/candidates/Alan Dillon_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: 'positive'
  },
  {
    name: "Barry Cowen",
    imageUrl: "./assets/images/candidates/Barry Cowen_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: 'negative'
  },
  {
    name: "Cathal Berry",
    imageUrl: "./assets/images/candidates/Cathal_Berry_Ind.jpg",
    partyName: "Independent",
    constituency: "Kildare South",
    score: 'did_not_vote'
  },
  {
    name: "Cathal Crowe",
    imageUrl: "./assets/images/candidates/Cathal Crowe_FF_Clare.jpg",
    partyName: "Fianna Fáil",
    constituency: "Clare",
    score: 'did_not_vote'
  },
  {
    name: "Catherine Connolly",
    imageUrl: "./assets/images/candidates/Connolly, Catherine.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: 'did_not_vote'
  },
  {
    name: "Chris Andrews",
    imageUrl: "./assets/images/candidates/Chris_Andrews_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay South",
    score: 'did_not_vote'
  },
  {
    name: "Ciaran Cannon",
    imageUrl: "./assets/images/candidates/Ciarán Cannon_FG_Galway East.jpg",
    partyName: "Fine Gael",
    constituency: "Galway East",
    score: 'did_not_vote'
  },
  {
    name: "Colm Brophy",
    imageUrl: "./assets/images/candidates/Colm Brophy_FG_Dublin South West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin South West",
    score: 'did_not_vote'
  },
  {
    name: "Colm Burke",
    imageUrl: "./assets/images/candidates/Colm Burke_FG_Cork North Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North Central",
    score: 'did_not_vote'
  },
  {
    name: "Cormac Devlin",
    imageUrl: "./assets/images/candidates/Cormac Devlin_FF_Dun Laoghaire.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dún Laoghaire",
    score: 'did_not_vote'
  },
  {
    name: "Dara Calleary",
    imageUrl: "./assets/images/candidates/Dara Calleary_FF_Mayo.jpg",
    partyName: "Fianna Fáil",
    constituency: "Mayo",
    score: 'did_not_vote'
  },
  {
    name: "David Cullinane",
    imageUrl: "./assets/images/candidates/David_Cullinane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Waterford",
    score: 'did_not_vote'
  },
  {
    name: "Holly Cairns",
    imageUrl: "./assets/images/candidates/Holly_Cairns_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Cork South West",
    score: 'did_not_vote'
  },
  {
    name: "Jack Chambers",
    imageUrl: "./assets/images/candidates/Jack Chambers_FF_Dublin West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin West",
    score: 'did_not_vote'
  },
  {
    name: "Jackie Cahill",
    imageUrl: "./assets/images/candidates/Jackie Cahill_FF_Tipperary.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tipperary",
    score: 'did_not_vote'
  },
  {
    name: "James Browne",
    imageUrl: "./assets/images/candidates/James Browne_FF_Wexford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wexford",
    score: 'negative'
  },
  {
    name: "Jennifer Carroll MacNeill",
    imageUrl: "./assets/images/candidates/Jennifer Carroll MacNeill_FG_Dún Laoghaire.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: 'did_not_vote'
  },
  {
    name: "Joan Collins",
    imageUrl: "./assets/images/candidates/Collins, Joan.png",
    partyName: "Independents 4 Change",
    constituency: "Dublin South Central",
    score: 'did_not_vote'
  },
  {
    name: "Joe Carey",
    imageUrl: "./assets/images/candidates/Joe Carey_FG_Clare.jpg",
    partyName: "Fine Gael",
    constituency: "Clare",
    score: 'did_not_vote'
  },
  {
    name: "John Brady",
    imageUrl: "./assets/images/candidates/John_Brady_TD.jpg",
    partyName: "Sinn Féin",
    constituency: "Wicklow",
    score: 'did_not_vote'
  },
  {
    name: "Martin Browne",
    imageUrl: "./assets/images/candidates/Martin_Browne_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Tipperary",
    score: 'did_not_vote'
  },
  {
    name: "Mary Butler",
    imageUrl: "./assets/images/candidates/Mary Butler_FF_Waterford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford",
    score: 'did_not_vote'
  },
  {
    name: "Matt Carthy",
    imageUrl: "./assets/images/candidates/Matt_Carthy_SF.png",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: 'did_not_vote'
  },
  {
    name: "Michael Collins",
    imageUrl: "./assets/images/candidates/Michael_Collins_Ind.jpg",
    partyName: "Independent",
    constituency: "Cork South West",
    score: 'did_not_vote'
  },
  {
    name: "Michael Creed",
    imageUrl: "./assets/images/candidates/Michael Creed_FG_Cork North West.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North West",
    score: 'did_not_vote'
  },
  {
    name: "Mick Barry",
    imageUrl: "./assets/images/candidates/Mick_Barry_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Cork North Central",
    score: 'did_not_vote'
  },
  {
    name: "Niall Collins",
    imageUrl: "./assets/images/candidates/Niall Collins_FF_Limerick County.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick County",
    score: 'did_not_vote'
  },
  {
    name: "Pa Daly",
    imageUrl: "./assets/images/candidates/Pa_Daly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kerry",
    score: 'did_not_vote'
  },
  {
    name: "Pat Buckley",
    imageUrl: "./assets/images/candidates/Pat_Buckley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork East",
    score: 'did_not_vote'
  },
  {
    name: "Patrick Costello",
    imageUrl: "./assets/images/candidates/Patrick Costello_GP_Dublin South Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin South Central",
    score: 'did_not_vote'
  },
  {
    name: "Peter Burke",
    imageUrl: "./assets/images/candidates/Peter Burke_FG_Longford-Westmeath.jpg",
    partyName: "Fine Gael",
    constituency: "Longford Westmeath",
    score: 'did_not_vote'
  },
  {
    name: "Reada Cronin",
    imageUrl: "./assets/images/candidates/Reada_Cronin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare North",
    score: 'did_not_vote'
  },
  {
    name: "Richard Boyd Barrett",
    imageUrl: "./assets/images/candidates/Richard_BoydBarrett_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dún Laoghaire",
    score: 'did_not_vote'
  },
  {
    name: "Richard Bruton",
    imageUrl: "./assets/images/candidates/Richard Bruton_FG_Dublin Bay North.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Bay North",
    score: 'negative'
  },
  {
    name: "Rose Conway Walsh",
    imageUrl: "./assets/images/candidates/Rose_ConwayWalsh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Mayo",
    score: 'did_not_vote'
  },
  {
    name: "Sean Canney",
    imageUrl: "./assets/images/candidates/Sean_Canney_Ind.jpg",
    partyName: "Independent",
    constituency: "Galway East",
    score: 'did_not_vote'
  },
  {
    name: "Sean Crowe",
    imageUrl: "./assets/images/candidates/Sean_Crowe_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South West",
    score: 'did_not_vote'
  },
  {
    name: "Simon Coveney",
    imageUrl: "./assets/images/candidates/Simon Coveney_FG_Cork South Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork South Central",
    score: 'did_not_vote'
  },
  {
    name: "Sorca Clarke",
    imageUrl: "./assets/images/candidates/Sorca_Clarke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Longford Westmeath",
    score: 'did_not_vote'
  },
  {
    name: "Thomas Byrne",
    imageUrl: "./assets/images/candidates/Thomas Byrne_FF_Meath East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Meath East",
    score: 'did_not_vote'
  },
  {
    name: "Pearse Doherty",
    imageUrl: "./assets/images/candidates/Pearse_Doherty_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: 'negative'
  },
  {
    name: "Paul Donnelly",
    imageUrl: "./assets/images/candidates/Paul_Donnelly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin West",
    score: 'did_not_vote'
  },
  {
    name: "Stephen Donnelly",
    imageUrl: "./assets/images/candidates/Stephen Donnelly_FF_Wicklow.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wicklow",
    score: 'did_not_vote'
  },
  {
    name: "Paschal Donohoe",
    imageUrl: "./assets/images/candidates/Paschal Donohoe_FG_Dublin Central.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Central",
    score: 'did_not_vote'
  },
  {
    name: "Francis Noel Duffy",
    imageUrl: "./assets/images/candidates/Francis Noel Duffy_GP_Dublin South-West.jpg",
    partyName: "Green Party",
    constituency: "Dublin South West",
    score: 'did_not_vote'
  },
  {
    name: "Bernard J. Durkan",
    imageUrl: "./assets/images/candidates/Bernard Durkan_FG_Kildare North.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare North",
    score: 'did_not_vote'
  },
  {
    name: "Dessie Ellis",
    imageUrl: "./assets/images/candidates/Dessie_Ellis_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin North West",
    score: 'did_not_vote'
  },
  {
    name: "Damien English",
    imageUrl: "./assets/images/candidates/Damien English_FG_Meath West.jpg",
    partyName: "Fine Gael",
    constituency: "Meath West",
    score: 'negative'
  },
  {
    name: "Alan Farrell",
    imageUrl: "./assets/images/candidates/Alan Farrell_FG_Dublin Fingal.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Fingal",
    score: 'did_not_vote'
  },
  {
    name: "Mairead Farrell",
    imageUrl: "./assets/images/candidates/Mairead_Farrell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Galway West",
    score: 'did_not_vote'
  },
  {
    name: "Frank Feighan",
    imageUrl: "./assets/images/candidates/Frank Feighan_FG_Sligo-Leitrim.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo Leitrim",
    score: 'did_not_vote'
  },
  {
    name: "Michael Fitzmaurice",
    imageUrl: "./assets/images/candidates/Fitzmaurice, Michael.jfif",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: 'did_not_vote'
  },
  {
    name: "Joe Flaherty",
    imageUrl: "./assets/images/candidates/Joe Flaherty_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: 'negative'
  },
  {
    name: "Charles Flanagan",
    imageUrl: "./assets/images/candidates/Charlie Flanagan_FG_Laois-Offaly.jpg",
    partyName: "Fine Gael",
    constituency: "Laois Offaly",
    score: 'did_not_vote'
  },
  {
    name: "Sean Fleming",
    imageUrl: "./assets/images/candidates/Seán Fleming_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: 'negative'
  },
  {
    name: "Norma Foley",
    imageUrl: "./assets/images/candidates/Norma Foley_FF_Kerry.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kerry",
    score: 'did_not_vote'
  },
  {
    name: "Kathleen Funchion",
    imageUrl: "./assets/images/candidates/Kathleen_Funchion_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Carlow Kilkenny",
    score: 'did_not_vote'
  },
  {
    name: "Gary Gannon",
    imageUrl: "./assets/images/candidates/Gary_Gannon_SD.jpeg",
    partyName: "Social Democrats",
    constituency: "Dublin Central",
    score: 'did_not_vote'
  },
  {
    name: "Thomas Gould",
    imageUrl: "./assets/images/candidates/Gould, Thomas.jfif",
    partyName: "Sinn Féin",
    constituency: "Cork North Central",
    score: 'did_not_vote'
  },
  {
    name: "Noel Grealish",
    imageUrl: "./assets/images/candidates/Grealish, Noel.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: 'did_not_vote'
  },
  {
    name: "Brendan Griffin",
    imageUrl: "./assets/images/candidates/Brendan Griffin_FG_Kerry.jpg",
    partyName: "Fine Gael",
    constituency: "Kerry",
    score: 'did_not_vote'
  },
  {
    name: "Johnny Guirke",
    imageUrl: "./assets/images/candidates/Johnny_Guirke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath West",
    score: 'did_not_vote'
  },
  {
    name: "Marian Harkin",
    imageUrl: "./assets/images/candidates/Marian_Harkin_Ind.jpg",
    partyName: "Independent",
    constituency: "Sligo Leitrim",
    score: 'did_not_vote'
  },
  {
    name: "Simon Harris",
    imageUrl: "./assets/images/candidates/Simon Harris_FG_Wicklow.jpg",
    partyName: "Fine Gael",
    constituency: "Wicklow",
    score: 'did_not_vote'
  },
  {
    name: "Sean Haughey",
    imageUrl: "./assets/images/candidates/Seán Haughey_FF_Dublin Bay North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay North",
    score: 'did_not_vote'
  },
  {
    name: "Danny Healy-Rae",
    imageUrl: "./assets/images/candidates/Danny_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: 'did_not_vote'
  },
  {
    name: "Michael Healy-Rae",
    imageUrl: "./assets/images/candidates/Michael_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: 'did_not_vote'
  },
  {
    name: "Martin Heydon",
    imageUrl: "./assets/images/candidates/Martin Heydon_FG_Kildare South.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare South",
    score: 'did_not_vote'
  },
  {
    name: "Emer Higgins",
    imageUrl: "./assets/images/candidates/Emer Higgins_FG_Dublin Mid West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Mid West",
    score: 'did_not_vote'
  },
  {
    name: "Neasa Hourigan",
    imageUrl: "./assets/images/candidates/Neasa Hourigan_GP_Dublin Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin Central",
    score: 'did_not_vote'
  },
  {
    name: "Brendan Howlin",
    imageUrl: "./assets/images/candidates/Brendan Howlin_Lab_Wexford.jpg",
    partyName: "Labour Party",
    constituency: "Wexford",
    score: 'did_not_vote'
  },
  {
    name: "Heather Humphreys",
    imageUrl: "./assets/images/candidates/Heather Humphreys_FG_Cavan-Monaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Cavan Monaghan",
    score: 'did_not_vote'
  },
  {
    name: "Paul Kehoe",
    imageUrl: "./assets/images/candidates/Paul Kehoe_FG_Wexford.jpg",
    partyName: "Fine Gael",
    constituency: "Wexford",
    score: 'did_not_vote'
  },
  {
    name: "Alan Kelly",
    imageUrl: "./assets/images/candidates/Alan Kelly_Lab_Tipperary.jpg",
    partyName: "Labour Party",
    constituency: "Tipperary",
    score: 'did_not_vote'
  },
  {
    name: "Gino Kenny",
    imageUrl: "./assets/images/candidates/Gino_Kenny_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin Mid West",
    score: 'negative'
  },
  {
    name: "Martin Kenny",
    imageUrl: "./assets/images/candidates/Martin_Kenny_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Sligo Leitrim",
    score: 'positive'
  },
  {
    name: "Claire Kerrane",
    imageUrl: "./assets/images/candidates/Claire_Kerrane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Roscommon Galway",
    score: 'did_not_vote'
  },
  {
    name: "John Lahart",
    imageUrl: "./assets/images/candidates/John Lahart_FF_Dublin South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin South West",
    score: 'negative'
  },
  {
    name: "James Lawless",
    imageUrl: "./assets/images/candidates/James Lawless_FF_Kildare North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kildare North",
    score: 'positive'
  },
  {
    name: "Brian Leddin",
    imageUrl: "./assets/images/candidates/Brian Leddin_GP_Limerick City.jpg",
    partyName: "Green Party",
    constituency: "Limerick City",
    score: 'negative'
  },
  {
    name: "Michael Lowry",
    imageUrl: "./assets/images/candidates/Michael_Lowry_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: 'negative'
  },
  {
    name: "Pádraig MacLochlainn",
    imageUrl: "./assets/images/candidates/Padraig_McLochlainn_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: 'did_not_vote'
  },
  {
    name: "Marc MacSharry",
    imageUrl: "./assets/images/candidates/Marc MacSharry_FF_Sligo-Leitim.jpg",
    partyName: "Fianna Fáil",
    constituency: "Sligo Leitrim",
    score: 'did_not_vote'
  },
  {
    name: "Josepha Madigan",
    imageUrl: "./assets/images/candidates/Josepha Madigan_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: 'negative'
  },
  {
    name: "Catherine Martin",
    imageUrl: "./assets/images/candidates/Catherine Martin_GP_Dublin Rathdown.jpg",
    partyName: "Green Party",
    constituency: "Dublin Rathdown",
    score: 'negative'
  },
  {
    name: "Micheal Martin",
    imageUrl: "./assets/images/candidates/Micheál Martin_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: 'positive'
  },
  {
    name: "Steven Matthews",
    imageUrl: "./assets/images/candidates/Steven Matthews_GP_Wicklow.jpg",
    partyName: "Green Party",
    constituency: "Wicklow",
    score: 'positive'
  },
  {
    name: "Paul McAuliffe",
    imageUrl: "./assets/images/candidates/Paul McAuliffe_FF_Dublin North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin North West",
    score: 'positive'
  },
  {
    name: "Charlie McConalogue",
    imageUrl: "./assets/images/candidates/Charlie McConalogue_FF_Donegal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: 'did_not_vote'
  },
  {
    name: "Mary Lou McDonald",
    imageUrl: "./assets/images/candidates/MaryLou_McDonald_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Central",
    score: 'positive'
  },
  {
    name: "Helen McEntee",
    imageUrl: "./assets/images/candidates/Helen McEntee_FG_Meath East.jpg",
    partyName: "Fine Gael",
    constituency: "Meath East",
    score: 'did_not_vote'
  },
  {
    name: "Mattie McGrath",
    imageUrl: "./assets/images/candidates/Mattie_McGrath_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: 'did_not_vote'
  },
  {
    name: "Michael McGrath",
    imageUrl: "./assets/images/candidates/Michael McGrath_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: 'did_not_vote'
  },
  {
    name: "John McGuinness",
    imageUrl: "./assets/images/candidates/John McGuinness_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: 'did_not_vote'
  },
  {
    name: "Joe McHugh",
    imageUrl: "./assets/images/candidates/Joe McHugh_FG_Donegal.jpg",
    partyName: "Fine Gael",
    constituency: "Donegal",
    score: 'did_not_vote'
  },
  {
    name: "Michael McNamara",
    imageUrl: "./assets/images/candidates/Michael_McNamara_Ind.jpg",
    partyName: "Independent",
    constituency: "Clare",
    score: 'did_not_vote'
  },
  {
    name: "Denise Mitchell",
    imageUrl: "./assets/images/candidates/Denise_Mitchell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay North",
    score: 'did_not_vote'
  },
  {
    name: "Aindrias Moynihan",
    imageUrl: "./assets/images/candidates/Aindrias Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: 'did_not_vote'
  },
  {
    name: "Michael Moynihan",
    imageUrl: "./assets/images/candidates/Michael Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: 'did_not_vote'
  },
  {
    name: "Imelda Munster",
    imageUrl: "./assets/images/candidates/Imelda_Munster_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: 'positive'
  },
  {
    name: "Jennifer Murnane O'Connor",
    imageUrl: "./assets/images/candidates/Jennifer Murnane O_Connor_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: 'positive'
  },
  {
    name: "Catherine Murphy",
    imageUrl: "./assets/images/candidates/Catherine_Murphy_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Kildare North",
    score: 'did_not_vote'
  },
  {
    name: "Paul Murphy",
    imageUrl: "./assets/images/candidates/Murphy, Paul.jfif",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South West",
    score: 'did_not_vote'
  },
  {
    name: "Verona Murphy",
    imageUrl: "./assets/images/candidates/Verona_Murphy_Ind.jpg",
    partyName: "Independent",
    constituency: "Wexford",
    score: 'did_not_vote'
  },
  {
    name: "Johnny Mythen",
    imageUrl: "./assets/images/candidates/Johnny_Mythen_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Wexford",
    score: 'positive'
  },
  {
    name: "Ged Nash",
    imageUrl: "./assets/images/candidates/Ged Nash_Lab_Louth.jpg",
    partyName: "Labour Party",
    constituency: "Louth",
    score: 'positive'
  },
  {
    name: "Denis Naughten",
    imageUrl: "./assets/images/candidates/Denis_Naughten_Ind.png",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: 'positive'
  },
  {
    name: "Hildegarde Naughton",
    imageUrl: "./assets/images/candidates/Hildegarde Naughton_FG_Galway West.jpg",
    partyName: "Fine Gael",
    constituency: "Galway West",
    score: 'positive'
  },
  {
    name: "Carol Nolan",
    imageUrl: "./assets/images/candidates/Carol_Nolan_Ind.jpg",
    partyName: "Independent",
    constituency: "Laois Offaly",
    score: 'positive'
  },
  {
    name: "Malcolm Noonan",
    imageUrl: "./assets/images/candidates/Malcolm Noonan_GP_Carlow-Kilkenny.jpg",
    partyName: "Green Party",
    constituency: "Carlow Kilkenny",
    score: 'positive'
  },
  {
    name: "Darragh O'Brien",
    imageUrl: "./assets/images/candidates/Darragh O_Brien _FF_Dublin Fingal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Fingal",
    score: 'positive'
  },
  {
    name: "Joe O'Brien",
    imageUrl: "./assets/images/candidates/Joe O_Brien_GP_Dublin Fingal.jpg",
    partyName: "Green Party",
    constituency: "Dublin Fingal",
    score: 'positive'
  },
  {
    name: "Cian O'Callaghan",
    imageUrl: "./assets/images/candidates/Cian_OCallaghan_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin Bay North",
    score: 'positive'
  },
  {
    name: "Jim O'Callaghan",
    imageUrl: "./assets/images/candidates/Jim O_Callaghan_FF_Dublin Bay South.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay South",
    score: 'positive'
  },
  {
    name: "James O'Connor",
    imageUrl: "./assets/images/candidates/James O_Connor_FF_Cork East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork East",
    score: 'positive'
  },
  {
    name: "Willie O'Dea",
    imageUrl: "./assets/images/candidates/Willie O_Dea_FF_Limerick City.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick City",
    score: 'positive'
  },
  {
    name: "Kieran O'Donnell",
    imageUrl: "./assets/images/candidates/Kieran O_Donnell_FG_Limerick City.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City",
    score: 'positive'
  },
  {
    name: "Richard O'Donoghue",
    imageUrl: "./assets/images/candidates/Richard_ODonoghue_INd.jpg",
    partyName: "Independent",
    constituency: "Limerick County",
    score: 'positive'
  },
  {
    name: "Patrick O'Donovan",
    imageUrl: "./assets/images/candidates/Patrick O_Donovan_FG_Limerick County.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick County",
    score: 'positive'
  },
  {
    name: "Fergus O'Dowd",
    imageUrl: "./assets/images/candidates/Fergus O_Dowd_FG_Louth.jpg",
    partyName: "Fine Gael",
    constituency: "Louth",
    score: 'positive'
  },
  {
    name: "Roderic O'Gorman",
    imageUrl: "./assets/images/candidates/Roderic O_Gorman_GP_Dublin West.jpg",
    partyName: "Green Party",
    constituency: "Dublin West",
    score: 'positive'
  },
  {
    name: "Louise O'Reilly",
    imageUrl: "./assets/images/candidates/Louise_OReilly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Fingal",
    score: 'positive'
  },
  {
    name: "Darren O'Rourke",
    imageUrl: "./assets/images/candidates/Darren_ORourke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath East",
    score: 'positive'
  },
  {
    name: "Christopher O'Sullivan",
    imageUrl: "./assets/images/candidates/Christopher O_Sullivan_FF_Cork South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South West",
    score: 'positive'
  },
  {
    name: "Padraig O'Sullivan",
    imageUrl: "./assets/images/candidates/Pádraig O_Sullivan_FF_Cork North Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North Central",
    score: 'positive'
  },
  {
    name: "John Paul Phelan",
    imageUrl: "./assets/images/candidates/John Paul Phelan_FG_Carlow-Kilkenny.jpg",
    partyName: "Fine Gael",
    constituency: "Carlow Kilkenny",
    score: 'positive'
  },
  {
    name: "Thomas Pringle",
    imageUrl: "./assets/images/candidates/Thomas_Pringle_Ind.jpg",
    partyName: "Independent",
    constituency: "Donegal",
    score: 'positive'
  },
  {
    name: "Maurice Quinlivan",
    imageUrl: "./assets/images/candidates/Maurice_Quinlivan_SF.jpeg",
    partyName: "Sinn Féin",
    constituency: "Limerick City",
    score: 'positive'
  },
  {
    name: "Anne Rabbitte",
    imageUrl: "./assets/images/candidates/Anne Rabbitte_FF_Galway East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway East",
    score: 'positive'
  },
  {
    name: "Neale Richmond",
    imageUrl: "./assets/images/candidates/Neale Richmond_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: 'positive'
  },
  {
    name: "Michael Ring",
    imageUrl: "./assets/images/candidates/Michael Ring_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: 'positive'
  },
  {
    name: "Eamon Ryan",
    imageUrl: "./assets/images/candidates/Eamon Ryan_GP_Dublin Bay South.jpg",
    partyName: "Green Party",
    constituency: "Dublin Bay South",
    score: 'positive'
  },
  {
    name: "Patricia Ryan",
    imageUrl: "./assets/images/candidates/Patricia_Ryan_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare South",
    score: 'positive'
  },
  {
    name: "Matt Shanahan",
    imageUrl: "./assets/images/candidates/Matt_Shanahan_Ind.jpg",
    partyName: "Independent",
    constituency: "Waterford",
    score: 'positive'
  },
  {
    name: "Sean Sherlock",
    imageUrl: "./assets/images/candidates/Sean Sherlock_Lab_Cork East.jpg",
    partyName: "Labour Party",
    constituency: "Cork East",
    score: 'positive'
  },
  {
    name: "Roisin Shortall",
    imageUrl: "./assets/images/candidates/Roisin_Shortall_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin North West",
    score: 'positive'
  },
  {
    name: "Brendan Smith",
    imageUrl: "./assets/images/candidates/Brendan Smith_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: 'positive'
  },
  {
    name: "Brid Smith",
    imageUrl: "./assets/images/candidates/Brid_Smith_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South Central",
    score: 'positive'
  },
  {
    name: "Duncan Smith",
    imageUrl: "./assets/images/candidates/Duncan Smith_Lab_Dublin Fingal.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Fingal",
    score: 'positive'
  },
  {
    name: "Niamh Smyth",
    imageUrl: "./assets/images/candidates/Niamh Smyth_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: 'positive'
  },
  {
    name: "Ossian Smyth",
    imageUrl: "./assets/images/candidates/Ossian Smyth_GP_Dun Laoghaire.jpg",
    partyName: "Green Party",
    constituency: "Dún Laoghaire",
    score: 'positive'
  },
  {
    name: "Brian Stanley",
    imageUrl: "./assets/images/candidates/Brian_Stanley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Laois Offaly",
    score: 'positive'
  },
  {
    name: "David Stanton",
    imageUrl: "./assets/images/candidates/David Stanton_FG_Cork East.jpg",
    partyName: "Fine Gael",
    constituency: "Cork East",
    score: 'positive'
  },
  {
    name: "Robert Troy",
    imageUrl: "./assets/images/candidates/Robert Troy_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: 'positive'
  },
  {
    name: "Pauline Tully",
    imageUrl: "./assets/images/candidates/Pauline_Tully_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: 'positive'
  },
  {
    name: "Peadar Tóibín",
    imageUrl: "./assets/images/candidates/Peadar_Toibin_Aontu.jpg",
    partyName: "Aontú",
    constituency: "Meath West",
    score: 'positive'
  },
  {
    name: "Leo Varadkar",
    imageUrl: "./assets/images/candidates/Leo Varadkar_FG_Dublin West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin West",
    score: 'positive'
  },
  {
    name: "Mark Ward",
    imageUrl: "./assets/images/candidates/Mark_Ward_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: 'positive'
  },
  {
    name: "Jennifer Whitmore",
    imageUrl: "./assets/images/candidates/Jennifer_Whitmore_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Wicklow",
    score: 'positive'
  },
  {
    name: "Violet-Anne Wynne",
    imageUrl: "./assets/images/candidates/Wynne, Violet-Anne.jfif",
    partyName: "Sinn Féin",
    constituency: "Clare",
    score: 'positive'
  },
  {
    name: "Eoin Ó Broin",
    imageUrl: "./assets/images/candidates/Eoin_OBroin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: 'positive'
  },
  {
    name: "Marc Ó Cathasaigh",
    imageUrl: "./assets/images/candidates/Marc O_Cathasaigh_GP_Waterford.jpg",
    partyName: "Green Party",
    constituency: "Waterford",
    score: 'positive'
  },
  {
    name: "Eamon Ó CuÍv",
    imageUrl: "./assets/images/candidates/Éamon Ó Cuív_FF_Galway West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway West",
    score: 'positive'
  },
  {
    name: "Donnchadh Ó Laoghaire",
    imageUrl: "./assets/images/candidates/Donnchadh_OLaoghaire_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork South Central",
    score: 'positive'
  },
  {
    name: "Ruairi Ó Murchú",
    imageUrl: "./assets/images/candidates/Ruairi_OMurchu_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: 'positive'
  },
  {
    name: "Aodhan Ó Ríordáin",
    imageUrl: "./assets/images/candidates/Aodhán Ó Ríordáin_Lab_Dublin Bay North.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Bay North",
    score: 'positive'
  },
  {
    name: "Aengus Ó Snodaigh",
    imageUrl: "./assets/images/candidates/Aengus_OSnodaigh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South Central",
    score: 'positive'
  },
  {
    name: "Ivana Bacik",
    imageUrl: "./assets/images/candidates/Bacik, Ivana_Lab.png",
    partyName: "Labour Party",
    constituency: "Dublin Bay South",
    score: 'positive'
  },
  {
    name: "Seán Ó Fearghaíl",
    imageUrl: "./assets/images/candidates/O Fearghail, Sean_FF.png",
    partyName: "Fianna Fáil",
    constituency: "Kildare South",
    score: 'positive'
  }
 ]