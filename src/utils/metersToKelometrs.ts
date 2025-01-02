
export default function metersToKelometrs(visibilityinMeters:number):string {
 const visibiltyInKilometers =visibilityinMeters/1000;
 return `${visibiltyInKilometers.toFixed(0)}km`;
}