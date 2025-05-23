import { TubeLine, Station } from "@/types/tube";

// This is a simplified version of the London Underground map
// The coordinates are normalized between 0 and 100 for positioning
export const tubeLines: TubeLine[] = [
  {
    id: "bakerloo",
    name: "Bakerloo",
    color: "#B36305",
    stations: [
      { id: "bakerloo-harrow", name: "Harrow & Wealdstone", x: 15, y: 5, connections: ["bakerloo-kenton"] },
      { id: "bakerloo-kenton", name: "Kenton", x: 17, y: 8, connections: ["bakerloo-harrow", "bakerloo-south-kenton"] },
      { id: "bakerloo-south-kenton", name: "South Kenton", x: 19, y: 11, connections: ["bakerloo-kenton", "bakerloo-north-wembley"] },
      { id: "bakerloo-north-wembley", name: "North Wembley", x: 21, y: 14, connections: ["bakerloo-south-kenton", "bakerloo-wembley-central"] },
      { id: "bakerloo-wembley-central", name: "Wembley Central", x: 23, y: 17, connections: ["bakerloo-north-wembley", "bakerloo-stonebridge-park"] },
      { id: "bakerloo-stonebridge-park", name: "Stonebridge Park", x: 25, y: 20, connections: ["bakerloo-wembley-central", "bakerloo-harlesden"] },
      { id: "bakerloo-harlesden", name: "Harlesden", x: 27, y: 23, connections: ["bakerloo-stonebridge-park", "bakerloo-willesden-junction"] },
      { id: "bakerloo-willesden-junction", name: "Willesden Junction", x: 29, y: 26, connections: ["bakerloo-harlesden", "bakerloo-kensal-green"] },
      { id: "bakerloo-kensal-green", name: "Kensal Green", x: 31, y: 29, connections: ["bakerloo-willesden-junction", "bakerloo-queens-park"] },
      { id: "bakerloo-queens-park", name: "Queen's Park", x: 33, y: 32, connections: ["bakerloo-kensal-green", "bakerloo-kilburn-park"] },
      { id: "bakerloo-kilburn-park", name: "Kilburn Park", x: 35, y: 35, connections: ["bakerloo-queens-park", "bakerloo-maida-vale"] },
      { id: "bakerloo-maida-vale", name: "Maida Vale", x: 37, y: 38, connections: ["bakerloo-kilburn-park", "bakerloo-warwick-avenue"] },
      { id: "bakerloo-warwick-avenue", name: "Warwick Avenue", x: 39, y: 41, connections: ["bakerloo-maida-vale", "bakerloo-paddington"] },
      { id: "bakerloo-paddington", name: "Paddington", x: 41, y: 44, connections: ["bakerloo-warwick-avenue", "bakerloo-edgware-road"], interchange: ["circle", "district", "hammersmith"] },
      { id: "bakerloo-edgware-road", name: "Edgware Road", x: 43, y: 47, connections: ["bakerloo-paddington", "bakerloo-marylebone"] },
      { id: "bakerloo-marylebone", name: "Marylebone", x: 45, y: 50, connections: ["bakerloo-edgware-road", "bakerloo-baker-street"] },
      { id: "bakerloo-baker-street", name: "Baker Street", x: 47, y: 52, connections: ["bakerloo-marylebone", "bakerloo-regents-park"], interchange: ["circle", "jubilee", "metropolitan"] },
      { id: "bakerloo-regents-park", name: "Regent's Park", x: 49, y: 54, connections: ["bakerloo-baker-street", "bakerloo-oxford-circus"] },
      { id: "bakerloo-oxford-circus", name: "Oxford Circus", x: 51, y: 56, connections: ["bakerloo-regents-park", "bakerloo-piccadilly-circus"], interchange: ["central", "victoria"] },
      { id: "bakerloo-piccadilly-circus", name: "Piccadilly Circus", x: 53, y: 58, connections: ["bakerloo-oxford-circus", "bakerloo-charing-cross"], interchange: ["piccadilly"] },
      { id: "bakerloo-charing-cross", name: "Charing Cross", x: 55, y: 60, connections: ["bakerloo-piccadilly-circus", "bakerloo-embankment"], interchange: ["northern"] },
      { id: "bakerloo-embankment", name: "Embankment", x: 57, y: 62, connections: ["bakerloo-charing-cross", "bakerloo-waterloo"], interchange: ["circle", "district", "northern"] },
      { id: "bakerloo-waterloo", name: "Waterloo", x: 59, y: 65, connections: ["bakerloo-embankment", "bakerloo-lambeth-north"], interchange: ["jubilee", "northern", "waterloo"] },
      { id: "bakerloo-lambeth-north", name: "Lambeth North", x: 61, y: 68, connections: ["bakerloo-waterloo", "bakerloo-elephant-castle"] },
      { id: "bakerloo-elephant-castle", name: "Elephant & Castle", x: 63, y: 71, connections: ["bakerloo-lambeth-north"], interchange: ["northern"] }
    ]
  },
  {
    id: "central",
    name: "Central",
    color: "#E32017",
    stations: [
      { id: "central-west-ruislip", name: "West Ruislip", x: 5, y: 25, connections: ["central-ruislip-gardens"] },
      { id: "central-ruislip-gardens", name: "Ruislip Gardens", x: 7, y: 27, connections: ["central-west-ruislip", "central-south-ruislip"] },
      { id: "central-south-ruislip", name: "South Ruislip", x: 9, y: 29, connections: ["central-ruislip-gardens", "central-northolt"] },
      { id: "central-northolt", name: "Northolt", x: 11, y: 31, connections: ["central-south-ruislip", "central-greenford"] },
      { id: "central-greenford", name: "Greenford", x: 13, y: 33, connections: ["central-northolt", "central-perivale"] },
      { id: "central-perivale", name: "Perivale", x: 15, y: 35, connections: ["central-greenford", "central-hanger-lane"] },
      { id: "central-hanger-lane", name: "Hanger Lane", x: 17, y: 37, connections: ["central-perivale", "central-north-acton"] },
      { id: "central-ealing-broadway", name: "Ealing Broadway", x: 15, y: 40, connections: ["central-west-acton"], interchange: ["district"] },
      { id: "central-west-acton", name: "West Acton", x: 17, y: 39, connections: ["central-ealing-broadway", "central-north-acton"] },
      { id: "central-north-acton", name: "North Acton", x: 19, y: 39, connections: ["central-west-acton", "central-hanger-lane", "central-east-acton"] },
      { id: "central-east-acton", name: "East Acton", x: 22, y: 39, connections: ["central-north-acton", "central-white-city"] },
      { id: "central-white-city", name: "White City", x: 25, y: 39, connections: ["central-east-acton", "central-shepherds-bush"] },
      { id: "central-shepherds-bush", name: "Shepherd's Bush", x: 28, y: 39, connections: ["central-white-city", "central-holland-park"] },
      { id: "central-holland-park", name: "Holland Park", x: 31, y: 39, connections: ["central-shepherds-bush", "central-notting-hill-gate"] },
      { id: "central-notting-hill-gate", name: "Notting Hill Gate", x: 34, y: 39, connections: ["central-holland-park", "central-queensway"], interchange: ["circle", "district"] },
      { id: "central-queensway", name: "Queensway", x: 37, y: 39, connections: ["central-notting-hill-gate", "central-lancaster-gate"] },
      { id: "central-lancaster-gate", name: "Lancaster Gate", x: 40, y: 39, connections: ["central-queensway", "central-marble-arch"] },
      { id: "central-marble-arch", name: "Marble Arch", x: 43, y: 39, connections: ["central-lancaster-gate", "central-bond-street"] },
      { id: "central-bond-street", name: "Bond Street", x: 46, y: 40, connections: ["central-marble-arch", "central-oxford-circus"], interchange: ["jubilee"] },
      { id: "central-oxford-circus", name: "Oxford Circus", x: 49, y: 41, connections: ["central-bond-street", "central-tottenham-court-road"], interchange: ["bakerloo", "victoria"] },
      { id: "central-tottenham-court-road", name: "Tottenham Court Road", x: 52, y: 42, connections: ["central-oxford-circus", "central-holborn"], interchange: ["northern", "elizabeth"] },
      { id: "central-holborn", name: "Holborn", x: 55, y: 43, connections: ["central-tottenham-court-road", "central-chancery-lane"], interchange: ["piccadilly"] },
      { id: "central-chancery-lane", name: "Chancery Lane", x: 58, y: 44, connections: ["central-holborn", "central-st-pauls"] },
      { id: "central-st-pauls", name: "St. Paul's", x: 61, y: 45, connections: ["central-chancery-lane", "central-bank"] },
      { id: "central-bank", name: "Bank", x: 64, y: 46, connections: ["central-st-pauls", "central-liverpool-street"], interchange: ["northern", "waterloo", "circle", "district", "metropolitan"] },
      { id: "central-liverpool-street", name: "Liverpool Street", x: 67, y: 47, connections: ["central-bank", "central-bethnal-green"], interchange: ["circle", "hammersmith", "metropolitan", "elizabeth"] },
      { id: "central-bethnal-green", name: "Bethnal Green", x: 70, y: 48, connections: ["central-liverpool-street", "central-mile-end"] },
      { id: "central-mile-end", name: "Mile End", x: 73, y: 49, connections: ["central-bethnal-green", "central-stratford"], interchange: ["district", "hammersmith"] },
      { id: "central-stratford", name: "Stratford", x: 77, y: 50, connections: ["central-mile-end", "central-leyton"], interchange: ["jubilee", "dlr", "overground", "elizabeth"] },
      { id: "central-leyton", name: "Leyton", x: 80, y: 49, connections: ["central-stratford", "central-leytonstone"] },
      { id: "central-leytonstone", name: "Leytonstone", x: 83, y: 48, connections: ["central-leyton", "central-wanstead", "central-snaresbrook"] },
      { id: "central-snaresbrook", name: "Snaresbrook", x: 85, y: 46, connections: ["central-leytonstone", "central-south-woodford"] },
      { id: "central-south-woodford", name: "South Woodford", x: 87, y: 44, connections: ["central-snaresbrook", "central-woodford"] },
      { id: "central-woodford", name: "Woodford", x: 89, y: 42, connections: ["central-south-woodford", "central-buckhurst-hill", "central-roding-valley"] },
      { id: "central-buckhurst-hill", name: "Buckhurst Hill", x: 91, y: 40, connections: ["central-woodford", "central-loughton"] },
      { id: "central-loughton", name: "Loughton", x: 93, y: 38, connections: ["central-buckhurst-hill", "central-debden"] },
      { id: "central-debden", name: "Debden", x: 95, y: 36, connections: ["central-loughton", "central-theydon-bois"] },
      { id: "central-theydon-bois", name: "Theydon Bois", x: 97, y: 34, connections: ["central-debden", "central-epping"] },
      { id: "central-epping", name: "Epping", x: 99, y: 32, connections: ["central-theydon-bois"] },
      { id: "central-roding-valley", name: "Roding Valley", x: 87, y: 40, connections: ["central-woodford", "central-chigwell"] },
      { id: "central-chigwell", name: "Chigwell", x: 85, y: 38, connections: ["central-roding-valley", "central-grange-hill"] },
      { id: "central-grange-hill", name: "Grange Hill", x: 83, y: 36, connections: ["central-chigwell", "central-hainault"] },
      { id: "central-hainault", name: "Hainault", x: 81, y: 34, connections: ["central-grange-hill", "central-fairlop"] },
      { id: "central-fairlop", name: "Fairlop", x: 79, y: 32, connections: ["central-hainault", "central-barkingside"] },
      { id: "central-barkingside", name: "Barkingside", x: 77, y: 30, connections: ["central-fairlop", "central-newbury-park"] },
      { id: "central-newbury-park", name: "Newbury Park", x: 75, y: 28, connections: ["central-barkingside", "central-gants-hill"] },
      { id: "central-gants-hill", name: "Gants Hill", x: 73, y: 26, connections: ["central-newbury-park", "central-redbridge"] },
      { id: "central-redbridge", name: "Redbridge", x: 71, y: 24, connections: ["central-gants-hill", "central-wanstead"] },
      { id: "central-wanstead", name: "Wanstead", x: 69, y: 22, connections: ["central-redbridge", "central-leytonstone"] }
    ]
  },
  {
    id: "victoria",
    name: "Victoria",
    color: "#0098D4",
    stations: [
      { id: "victoria-walthamstow-central", name: "Walthamstow Central", x: 75, y: 15, connections: ["victoria-blackhorse-road"] },
      { id: "victoria-blackhorse-road", name: "Blackhorse Road", x: 73, y: 18, connections: ["victoria-walthamstow-central", "victoria-tottenham-hale"] },
      { id: "victoria-tottenham-hale", name: "Tottenham Hale", x: 71, y: 21, connections: ["victoria-blackhorse-road", "victoria-seven-sisters"] },
      { id: "victoria-seven-sisters", name: "Seven Sisters", x: 69, y: 24, connections: ["victoria-tottenham-hale", "victoria-finsbury-park"] },
      { id: "victoria-finsbury-park", name: "Finsbury Park", x: 67, y: 27, connections: ["victoria-seven-sisters", "victoria-highbury"], interchange: ["piccadilly"] },
      { id: "victoria-highbury", name: "Highbury & Islington", x: 65, y: 30, connections: ["victoria-finsbury-park", "victoria-kings-cross"], interchange: ["overground"] },
      { id: "victoria-kings-cross", name: "King's Cross St Pancras", x: 63, y: 33, connections: ["victoria-highbury", "victoria-euston"], interchange: ["circle", "hammersmith", "metropolitan", "northern", "piccadilly"] },
      { id: "victoria-euston", name: "Euston", x: 61, y: 36, connections: ["victoria-kings-cross", "victoria-warren-street"], interchange: ["northern"] },
      { id: "victoria-warren-street", name: "Warren Street", x: 59, y: 39, connections: ["victoria-euston", "victoria-oxford-circus"], interchange: ["northern"] },
      { id: "victoria-oxford-circus", name: "Oxford Circus", x: 57, y: 42, connections: ["victoria-warren-street", "victoria-green-park"], interchange: ["bakerloo", "central"] },
      { id: "victoria-green-park", name: "Green Park", x: 55, y: 45, connections: ["victoria-oxford-circus", "victoria-victoria"], interchange: ["jubilee", "piccadilly"] },
      { id: "victoria-victoria", name: "Victoria", x: 53, y: 48, connections: ["victoria-green-park", "victoria-pimlico"], interchange: ["circle", "district"] },
      { id: "victoria-pimlico", name: "Pimlico", x: 51, y: 51, connections: ["victoria-victoria", "victoria-vauxhall"] },
      { id: "victoria-vauxhall", name: "Vauxhall", x: 49, y: 54, connections: ["victoria-pimlico", "victoria-stockwell"] },
      { id: "victoria-stockwell", name: "Stockwell", x: 47, y: 57, connections: ["victoria-vauxhall", "victoria-brixton"], interchange: ["northern"] },
      { id: "victoria-brixton", name: "Brixton", x: 45, y: 60, connections: ["victoria-stockwell"] }
    ]
  },
  {
    id: "circle",
    name: "Circle",
    color: "#FFD300",
    stations: [
      { id: "circle-paddington", name: "Paddington", x: 33, y: 41, connections: ["circle-edgware-road", "circle-bayswater"], interchange: ["bakerloo", "district", "hammersmith"] },
      { id: "circle-edgware-road", name: "Edgware Road", x: 35, y: 39, connections: ["circle-paddington", "circle-baker-street"], interchange: ["bakerloo", "district", "hammersmith"] },
      { id: "circle-baker-street", name: "Baker Street", x: 37, y: 37, connections: ["circle-edgware-road", "circle-great-portland-street"], interchange: ["bakerloo", "jubilee", "metropolitan"] },
      { id: "circle-great-portland-street", name: "Great Portland Street", x: 39, y: 35, connections: ["circle-baker-street", "circle-euston-square"] },
      { id: "circle-euston-square", name: "Euston Square", x: 41, y: 33, connections: ["circle-great-portland-street", "circle-kings-cross"], interchange: ["metropolitan", "hammersmith"] },
      { id: "circle-kings-cross", name: "King's Cross St Pancras", x: 43, y: 31, connections: ["circle-euston-square", "circle-farringdon"], interchange: ["metropolitan", "hammersmith", "northern", "piccadilly", "victoria"] },
      { id: "circle-farringdon", name: "Farringdon", x: 45, y: 34, connections: ["circle-kings-cross", "circle-barbican"], interchange: ["metropolitan", "hammersmith", "elizabeth"] },
      { id: "circle-barbican", name: "Barbican", x: 47, y: 37, connections: ["circle-farringdon", "circle-moorgate"], interchange: ["metropolitan", "hammersmith"] },
      { id: "circle-moorgate", name: "Moorgate", x: 49, y: 40, connections: ["circle-barbican", "circle-liverpool-street"], interchange: ["metropolitan", "hammersmith", "northern"] },
      { id: "circle-liverpool-street", name: "Liverpool Street", x: 51, y: 43, connections: ["circle-moorgate", "circle-aldgate"], interchange: ["metropolitan", "hammersmith", "central", "elizabeth"] },
      { id: "circle-aldgate", name: "Aldgate", x: 53, y: 46, connections: ["circle-liverpool-street", "circle-tower-hill"], interchange: ["metropolitan"] },
      { id: "circle-tower-hill", name: "Tower Hill", x: 55, y: 49, connections: ["circle-aldgate", "circle-monument"], interchange: ["circle"] },
      { id: "circle-monument", name: "Monument", x: 53, y: 52, connections: ["circle-tower-hill", "circle-cannon-street"], interchange: ["circle"] },
      { id: "circle-cannon-street", name: "Cannon Street", x: 51, y: 54, connections: ["circle-monument", "circle-mansion-house"], interchange: ["circle"] },
      { id: "circle-mansion-house", name: "Mansion House", x: 49, y: 56, connections: ["circle-cannon-street", "circle-blackfriars"], interchange: ["circle"] },
      { id: "circle-blackfriars", name: "Blackfriars", x: 47, y: 58, connections: ["circle-mansion-house", "circle-temple"], interchange: ["circle"] },
      { id: "circle-temple", name: "Temple", x: 45, y: 60, connections: ["circle-blackfriars", "circle-embankment"], interchange: ["circle"] },
      { id: "circle-embankment", name: "Embankment", x: 43, y: 62, connections: ["circle-temple", "circle-westminster"], interchange: ["circle", "bakerloo", "northern"] },
      { id: "circle-westminster", name: "Westminster", x: 41, y: 64, connections: ["circle-embankment", "circle-st-james-park"], interchange: ["circle", "jubilee"] },
      { id: "circle-st-james-park", name: "St James's Park", x: 39, y: 66, connections: ["circle-westminster", "circle-victoria"], interchange: ["circle"] },
      { id: "circle-victoria", name: "Victoria", x: 37, y: 68, connections: ["circle-st-james-park", "circle-sloane-square"], interchange: ["circle", "victoria"] },
      { id: "circle-sloane-square", name: "Sloane Square", x: 35, y: 66, connections: ["circle-victoria", "circle-south-kensington"], interchange: ["circle"] },
      { id: "circle-south-kensington", name: "South Kensington", x: 33, y: 64, connections: ["circle-sloane-square", "circle-gloucester-road"], interchange: ["circle", "piccadilly"] },
      { id: "circle-gloucester-road", name: "Gloucester Road", x: 31, y: 62, connections: ["circle-south-kensington", "circle-high-street-kensington"], interchange: ["circle", "piccadilly"] },
      { id: "circle-high-street-kensington", name: "High Street Kensington", x: 29, y: 60, connections: ["circle-gloucester-road", "circle-notting-hill-gate"], interchange: ["circle"] },
      { id: "circle-notting-hill-gate", name: "Notting Hill Gate", x: 27, y: 58, connections: ["circle-high-street-kensington", "circle-bayswater"], interchange: ["central", "district"] },
      { id: "circle-bayswater", name: "Bayswater", x: 25, y: 56, connections: ["circle-notting-hill-gate", "circle-paddington"], interchange: ["district"] }
    ]
  },
  {
    id: "district",
    name: "District",
    color: "#00782A",
    stations: [
      { id: "district-upminster", name: "Upminster", x: 95, y: 55, connections: ["district-upminster-bridge"] },
      { id: "district-upminster-bridge", name: "Upminster Bridge", x: 93, y: 55, connections: ["district-upminster", "district-hornchurch"] },
      { id: "district-hornchurch", name: "Hornchurch", x: 91, y: 55, connections: ["district-upminster-bridge", "district-elm-park"] },
      { id: "district-elm-park", name: "Elm Park", x: 89, y: 55, connections: ["district-hornchurch", "district-dagenham-east"] },
      { id: "district-dagenham-east", name: "Dagenham East", x: 87, y: 55, connections: ["district-elm-park", "district-dagenham-heathway"] },
      { id: "district-dagenham-heathway", name: "Dagenham Heathway", x: 85, y: 55, connections: ["district-dagenham-east", "district-becontree"] },
      { id: "district-becontree", name: "Becontree", x: 83, y: 55, connections: ["district-dagenham-heathway", "district-upney"] },
      { id: "district-upney", name: "Upney", x: 81, y: 55, connections: ["district-becontree", "district-barking"] },
      { id: "district-barking", name: "Barking", x: 79, y: 55, connections: ["district-upney", "district-east-ham"] },
      { id: "district-east-ham", name: "East Ham", x: 77, y: 54, connections: ["district-barking", "district-upton-park"] },
      { id: "district-upton-park", name: "Upton Park", x: 75, y: 53, connections: ["district-east-ham", "district-plaistow"] },
      { id: "district-plaistow", name: "Plaistow", x: 73, y: 52, connections: ["district-upton-park", "district-west-ham"] },
      { id: "district-west-ham", name: "West Ham", x: 71, y: 51, connections: ["district-plaistow", "district-bromley-by-bow"], interchange: ["jubilee", "dlr", "elizabeth"] },
      { id: "district-bromley-by-bow", name: "Bromley-by-Bow", x: 69, y: 50, connections: ["district-west-ham", "district-bow-road"] },
      { id: "district-bow-road", name: "Bow Road", x: 67, y: 49, connections: ["district-bromley-by-bow", "district-mile-end"] },
      { id: "district-mile-end", name: "Mile End", x: 65, y: 48, connections: ["district-bow-road", "district-stepney-green"], interchange: ["central", "hammersmith"] },
      { id: "district-stepney-green", name: "Stepney Green", x: 63, y: 47, connections: ["district-mile-end", "district-whitechapel"] },
      { id: "district-whitechapel", name: "Whitechapel", x: 61, y: 46, connections: ["district-stepney-green", "district-aldgate-east"], interchange: ["hammersmith", "elizabeth"] },
      { id: "district-aldgate-east", name: "Aldgate East", x: 59, y: 45, connections: ["district-whitechapel", "district-tower-hill"] },
      { id: "district-tower-hill", name: "Tower Hill", x: 57, y: 44, connections: ["district-aldgate-east", "district-monument"], interchange: ["circle"] },
      // Main line section that circles with the Circle line
      { id: "district-monument", name: "Monument", x: 53, y: 52, connections: ["district-tower-hill", "district-cannon-street"], interchange: ["circle"] },
      { id: "district-cannon-street", name: "Cannon Street", x: 51, y: 54, connections: ["district-monument", "district-mansion-house"], interchange: ["circle"] },
      { id: "district-mansion-house", name: "Mansion House", x: 49, y: 56, connections: ["district-cannon-street", "district-blackfriars"], interchange: ["circle"] },
      { id: "district-blackfriars", name: "Blackfriars", x: 47, y: 58, connections: ["district-mansion-house", "district-temple"], interchange: ["circle"] },
      { id: "district-temple", name: "Temple", x: 45, y: 60, connections: ["district-blackfriars", "district-embankment"], interchange: ["circle"] },
      { id: "district-embankment", name: "Embankment", x: 43, y: 62, connections: ["district-temple", "district-westminster"], interchange: ["circle", "bakerloo", "northern"] },
      { id: "district-westminster", name: "Westminster", x: 41, y: 64, connections: ["district-embankment", "district-st-james-park"], interchange: ["circle", "jubilee"] },
      { id: "district-st-james-park", name: "St James's Park", x: 39, y: 66, connections: ["district-westminster", "district-victoria"], interchange: ["circle"] },
      { id: "district-victoria", name: "Victoria", x: 37, y: 68, connections: ["district-st-james-park", "district-sloane-square"], interchange: ["circle", "victoria"] },
      { id: "district-sloane-square", name: "Sloane Square", x: 35, y: 66, connections: ["district-victoria", "district-south-kensington"], interchange: ["circle"] },
      { id: "district-south-kensington", name: "South Kensington", x: 33, y: 64, connections: ["district-sloane-square", "district-gloucester-road"], interchange: ["circle", "piccadilly"] }
    ]
  },
  {
    id: "jubilee",
    name: "Jubilee",
    color: "#A0A5A9",
    stations: [
      { id: "jubilee-stanmore", name: "Stanmore", x: 20, y: 10, connections: ["jubilee-canons-park"] },
      { id: "jubilee-canons-park", name: "Canons Park", x: 22, y: 12, connections: ["jubilee-stanmore", "jubilee-queensbury"] },
      { id: "jubilee-queensbury", name: "Queensbury", x: 24, y: 14, connections: ["jubilee-canons-park", "jubilee-kingsbury"] },
      { id: "jubilee-kingsbury", name: "Kingsbury", x: 26, y: 16, connections: ["jubilee-queensbury", "jubilee-wembley-park"] },
      { id: "jubilee-wembley-park", name: "Wembley Park", x: 28, y: 18, connections: ["jubilee-kingsbury", "jubilee-neasden"], interchange: ["metropolitan"] },
      { id: "jubilee-neasden", name: "Neasden", x: 30, y: 20, connections: ["jubilee-wembley-park", "jubilee-dollis-hill"] },
      { id: "jubilee-dollis-hill", name: "Dollis Hill", x: 32, y: 22, connections: ["jubilee-neasden", "jubilee-willesden-green"] },
      { id: "jubilee-willesden-green", name: "Willesden Green", x: 34, y: 24, connections: ["jubilee-dollis-hill", "jubilee-kilburn"] },
      { id: "jubilee-kilburn", name: "Kilburn", x: 36, y: 26, connections: ["jubilee-willesden-green", "jubilee-west-hampstead"] },
      { id: "jubilee-west-hampstead", name: "West Hampstead", x: 38, y: 28, connections: ["jubilee-kilburn", "jubilee-finchley-road"] },
      { id: "jubilee-finchley-road", name: "Finchley Road", x: 40, y: 30, connections: ["jubilee-west-hampstead", "jubilee-swiss-cottage"], interchange: ["metropolitan"] },
      { id: "jubilee-swiss-cottage", name: "Swiss Cottage", x: 42, y: 32, connections: ["jubilee-finchley-road", "jubilee-st-johns-wood"] },
      { id: "jubilee-st-johns-wood", name: "St. John's Wood", x: 44, y: 34, connections: ["jubilee-swiss-cottage", "jubilee-baker-street"] },
      { id: "jubilee-baker-street", name: "Baker Street", x: 46, y: 36, connections: ["jubilee-st-johns-wood", "jubilee-bond-street"], interchange: ["bakerloo", "circle", "metropolitan"] },
      { id: "jubilee-bond-street", name: "Bond Street", x: 48, y: 38, connections: ["jubilee-baker-street", "jubilee-green-park"], interchange: ["central"] },
      { id: "jubilee-green-park", name: "Green Park", x: 50, y: 40, connections: ["jubilee-bond-street", "jubilee-westminster"], interchange: ["piccadilly", "victoria"] },
      { id: "jubilee-westminster", name: "Westminster", x: 52, y: 42, connections: ["jubilee-green-park", "jubilee-waterloo"], interchange: ["circle", "district"] },
      { id: "jubilee-waterloo", name: "Waterloo", x: 54, y: 44, connections: ["jubilee-westminster", "jubilee-southwark"], interchange: ["bakerloo", "northern", "waterloo"] },
      { id: "jubilee-southwark", name: "Southwark", x: 56, y: 46, connections: ["jubilee-waterloo", "jubilee-london-bridge"] },
      { id: "jubilee-london-bridge", name: "London Bridge", x: 58, y: 48, connections: ["jubilee-southwark", "jubilee-bermondsey"], interchange: ["northern"] },
      { id: "jubilee-bermondsey", name: "Bermondsey", x: 60, y: 50, connections: ["jubilee-london-bridge", "jubilee-canada-water"] },
      { id: "jubilee-canada-water", name: "Canada Water", x: 62, y: 52, connections: ["jubilee-bermondsey", "jubilee-canary-wharf"], interchange: ["overground"] },
      { id: "jubilee-canary-wharf", name: "Canary Wharf", x: 64, y: 54, connections: ["jubilee-canada-water", "jubilee-north-greenwich"], interchange: ["dlr", "elizabeth"] },
      { id: "jubilee-north-greenwich", name: "North Greenwich", x: 66, y: 56, connections: ["jubilee-canary-wharf", "jubilee-canning-town"] },
      { id: "jubilee-canning-town", name: "Canning Town", x: 68, y: 58, connections: ["jubilee-north-greenwich", "jubilee-west-ham"], interchange: ["dlr"] },
      { id: "jubilee-west-ham", name: "West Ham", x: 70, y: 60, connections: ["jubilee-canning-town", "jubilee-stratford"], interchange: ["district", "dlr", "elizabeth"] },
      { id: "jubilee-stratford", name: "Stratford", x: 72, y: 62, connections: ["jubilee-west-ham"], interchange: ["central", "dlr", "overground", "elizabeth"] }
    ]
  },
  {
    id: "northern",
    name: "Northern",
    color: "#000000",
    stations: [
      { id: "northern-high-barnet", name: "High Barnet", x: 45, y: 5, connections: ["northern-totteridge"] },
      { id: "northern-totteridge", name: "Totteridge & Whetstone", x: 46, y: 7, connections: ["northern-high-barnet", "northern-woodside-park"] },
      { id: "northern-woodside-park", name: "Woodside Park", x: 47, y: 9, connections: ["northern-totteridge", "northern-west-finchley"] },
      { id: "northern-west-finchley", name: "West Finchley", x: 48, y: 11, connections: ["northern-woodside-park", "northern-finchley-central"] },
      { id: "northern-finchley-central", name: "Finchley Central", x: 49, y: 13, connections: ["northern-west-finchley", "northern-east-finchley", "northern-mill-hill-east"] },
      { id: "northern-mill-hill-east", name: "Mill Hill East", x: 47, y: 15, connections: ["northern-finchley-central"] },
      { id: "northern-east-finchley", name: "East Finchley", x: 50, y: 15, connections: ["northern-finchley-central", "northern-highgate"] },
      { id: "northern-highgate", name: "Highgate", x: 51, y: 17, connections: ["northern-east-finchley", "northern-archway"] },
      { id: "northern-archway", name: "Archway", x: 52, y: 19, connections: ["northern-highgate", "northern-tufnell-park"] },
      { id: "northern-tufnell-park", name: "Tufnell Park", x: 53, y: 21, connections: ["northern-archway", "northern-kentish-town"] },
      { id: "northern-kentish-town", name: "Kentish Town", x: 54, y: 23, connections: ["northern-tufnell-park", "northern-camden-town"] },
      { id: "northern-camden-town", name: "Camden Town", x: 55, y: 25, connections: ["northern-kentish-town", "northern-euston", "northern-chalk-farm", "northern-mornington-crescent"] },
      { id: "northern-chalk-farm", name: "Chalk Farm", x: 53, y: 27, connections: ["northern-camden-town", "northern-belsize-park"] },
      { id: "northern-belsize-park", name: "Belsize Park", x: 51, y: 29, connections: ["northern-chalk-farm", "northern-hampstead"] },
      { id: "northern-hampstead", name: "Hampstead", x: 49, y: 31, connections: ["northern-belsize-park", "northern-golders-green"] },
      { id: "northern-golders-green", name: "Golders Green", x: 47, y: 33, connections: ["northern-hampstead", "northern-brent-cross"] },
      { id: "northern-brent-cross", name: "Brent Cross", x: 45, y: 35, connections: ["northern-golders-green", "northern-hendon-central"] },
      { id: "northern-hendon-central", name: "Hendon Central", x: 43, y: 37, connections: ["northern-brent-cross", "northern-colindale"] },
      { id: "northern-colindale", name: "Colindale", x: 41, y: 39, connections: ["northern-hendon-central", "northern-burnt-oak"] },
      { id: "northern-burnt-oak", name: "Burnt Oak", x: 39, y: 41, connections: ["northern-colindale", "northern-edgware"] },
      { id: "northern-edgware", name: "Edgware", x: 37, y: 43, connections: ["northern-burnt-oak"] },
      { id: "northern-mornington-crescent", name: "Mornington Crescent", x: 55, y: 27, connections: ["northern-camden-town", "northern-euston"] },
      { id: "northern-euston", name: "Euston", x: 56, y: 29, connections: ["northern-camden-town", "northern-mornington-crescent", "northern-kings-cross", "northern-warren-street"], interchange: ["victoria"] },
      { id: "northern-kings-cross", name: "King's Cross St Pancras", x: 58, y: 31, connections: ["northern-euston", "northern-angel"], interchange: ["circle", "hammersmith", "metropolitan", "piccadilly", "victoria"] },
      { id: "northern-angel", name: "Angel", x: 60, y: 33, connections: ["northern-kings-cross", "northern-old-street"] },
      { id: "northern-old-street", name: "Old Street", x: 62, y: 35, connections: ["northern-angel", "northern-moorgate"] },
      { id: "northern-moorgate", name: "Moorgate", x: 64, y: 37, connections: ["northern-old-street", "northern-bank"], interchange: ["circle", "hammersmith", "metropolitan"] },
      { id: "northern-bank", name: "Bank", x: 66, y: 39, connections: ["northern-moorgate", "northern-london-bridge"], interchange: ["central", "waterloo", "circle", "district", "metropolitan"] },
      { id: "northern-london-bridge", name: "London Bridge", x: 68, y: 41, connections: ["northern-bank", "northern-borough"], interchange: ["jubilee"] },
      { id: "northern-borough", name: "Borough", x: 66, y: 43, connections: ["northern-london-bridge", "northern-elephant-castle"] },
      { id: "northern-elephant-castle", name: "Elephant & Castle", x: 64, y: 45, connections: ["northern-borough", "northern-kennington"], interchange: ["bakerloo"] },
      { id: "northern-kennington", name: "Kennington", x: 62, y: 47, connections: ["northern-elephant-castle", "northern-oval", "northern-waterloo"] },
      { id: "northern-oval", name: "Oval", x: 60, y: 49, connections: ["northern-kennington", "northern-stockwell"] },
      { id: "northern-stockwell", name: "Stockwell", x: 58, y: 51, connections: ["northern-oval", "northern-clapham-north"], interchange: ["victoria"] },
      { id: "northern-clapham-north", name: "Clapham North", x: 56, y: 53, connections: ["northern-stockwell", "northern-clapham-common"] },
      { id: "northern-clapham-common", name: "Clapham Common", x: 54, y: 55, connections: ["northern-clapham-north", "northern-clapham-south"] },
      { id: "northern-clapham-south", name: "Clapham South", x: 52, y: 57, connections: ["northern-clapham-common", "northern-balham"] },
      { id: "northern-balham", name: "Balham", x: 50, y: 59, connections: ["northern-clapham-south", "northern-tooting-bec"] },
      { id: "northern-tooting-bec", name: "Tooting Bec", x: 48, y: 61, connections: ["northern-balham", "northern-tooting-broadway"] },
      { id: "northern-tooting-broadway", name: "Tooting Broadway", x: 46, y: 63, connections: ["northern-tooting-bec", "northern-colliers-wood"] },
      { id: "northern-colliers-wood", name: "Colliers Wood", x: 44, y: 65, connections: ["northern-tooting-broadway", "northern-south-wimbledon"] },
      { id: "northern-south-wimbledon", name: "South Wimbledon", x: 42, y: 67, connections: ["northern-colliers-wood", "northern-morden"] },
      { id: "northern-morden", name: "Morden", x: 40, y: 69, connections: ["northern-south-wimbledon"] },
      { id: "northern-warren-street", name: "Warren Street", x: 57, y: 31, connections: ["northern-euston", "northern-goodge-street"], interchange: ["victoria"] },
      { id: "northern-goodge-street", name: "Goodge Street", x: 58, y: 33, connections: ["northern-warren-street", "northern-tottenham-court-road"] },
      { id: "northern-tottenham-court-road", name: "Tottenham Court Road", x: 59, y: 35, connections: ["northern-goodge-street", "northern-leicester-square"], interchange: ["central", "elizabeth"] },
      { id: "northern-leicester-square", name: "Leicester Square", x: 60, y: 37, connections: ["northern-tottenham-court-road", "northern-charing-cross"], interchange: ["piccadilly"] },
      { id: "northern-charing-cross", name: "Charing Cross", x: 61, y: 39, connections: ["northern-leicester-square", "northern-embankment"], interchange: ["bakerloo"] },
      { id: "northern-embankment", name: "Embankment", x: 62, y: 41, connections: ["northern-charing-cross", "northern-waterloo"], interchange: ["bakerloo", "circle", "district"] },
      { id: "northern-waterloo", name: "Waterloo", x: 63, y: 43, connections: ["northern-embankment", "northern-kennington"], interchange: ["bakerloo", "jubilee", "waterloo"] }
    ]
  },
  {
    id: "piccadilly",
    name: "Piccadilly",
    color: "#003688",
    stations: [
      { id: "piccadilly-cockfosters", name: "Cockfosters", x: 85, y: 10, connections: ["piccadilly-oakwood"] },
      { id: "piccadilly-oakwood", name: "Oakwood", x: 83, y: 12, connections: ["piccadilly-cockfosters", "piccadilly-southgate"] },
      { id: "piccadilly-southgate", name: "Southgate", x: 81, y: 14, connections: ["piccadilly-oakwood", "piccadilly-arnos-grove"] },
      { id: "piccadilly-arnos-grove", name: "Arnos Grove", x: 79, y: 16, connections: ["piccadilly-southgate", "piccadilly-bounds-green"] },
      { id: "piccadilly-bounds-green", name: "Bounds Green", x: 77, y: 18, connections: ["piccadilly-arnos-grove", "piccadilly-wood-green"] },
      { id: "piccadilly-wood-green", name: "Wood Green", x: 75, y: 20, connections: ["piccadilly-bounds-green", "piccadilly-turnpike-lane"] },
      { id: "piccadilly-turnpike-lane", name: "Turnpike Lane", x: 73, y: 22, connections: ["piccadilly-wood-green", "piccadilly-manor-house"] },
      { id: "piccadilly-manor-house", name: "Manor House", x: 71, y: 24, connections: ["piccadilly-turnpike-lane", "piccadilly-finsbury-park"] },
      { id: "piccadilly-finsbury-park", name: "Finsbury Park", x: 69, y: 26, connections: ["piccadilly-manor-house", "piccadilly-arsenal"], interchange: ["victoria"] },
      { id: "piccadilly-arsenal", name: "Arsenal", x: 67, y: 28, connections: ["piccadilly-finsbury-park", "piccadilly-holloway-road"] },
      { id: "piccadilly-holloway-road", name: "Holloway Road", x: 65, y: 30, connections: ["piccadilly-arsenal", "piccadilly-caledonian-road"] },
      { id: "piccadilly-caledonian-road", name: "Caledonian Road", x: 63, y: 32, connections: ["piccadilly-holloway-road", "piccadilly-kings-cross"] },
      { id: "piccadilly-kings-cross", name: "King's Cross St Pancras", x: 61, y: 34, connections: ["piccadilly-caledonian-road", "piccadilly-russell-square"], interchange: ["circle", "hammersmith", "metropolitan", "northern", "victoria"] },
      { id: "piccadilly-russell-square", name: "Russell Square", x: 59, y: 36, connections: ["piccadilly-kings-cross", "piccadilly-holborn"] },
      { id: "piccadilly-holborn", name: "Holborn", x: 57, y: 38, connections: ["piccadilly-russell-square", "piccadilly-covent-garden"], interchange: ["central"] },
      { id: "piccadilly-covent-garden", name: "Covent Garden", x: 55, y: 40, connections: ["piccadilly-holborn", "piccadilly-leicester-square"] },
      { id: "piccadilly-leicester-square", name: "Leicester Square", x: 53, y: 42, connections: ["piccadilly-covent-garden", "piccadilly-piccadilly-circus"], interchange: ["northern"] },
      { id: "piccadilly-piccadilly-circus", name: "Piccadilly Circus", x: 51, y: 44, connections: ["piccadilly-leicester-square", "piccadilly-green-park"], interchange: ["bakerloo"] },
      { id: "piccadilly-green-park", name: "Green Park", x: 49, y: 46, connections: ["piccadilly-piccadilly-circus", "piccadilly-hyde-park-corner"], interchange: ["jubilee", "victoria"] }
    ]
  }
];

// Function to get all station IDs and create a lookup map
export const getAllStations = (): Record<string, Station> => {
  const allStations: Record<string, Station> = {};
  
  // Loop through all tube lines and collect their stations
  tubeLines.forEach(line => {
    line.stations.forEach(station => {
      allStations[station.id] = station;
    });
  });
  
  return allStations;
};
