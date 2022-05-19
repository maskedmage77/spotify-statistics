export default function calculateUniquenessScores (data: Array<any>, setter: Function) {
  let pop_total = 0;
  let track_total = 0;
  data.forEach((track: any) => {
    track_total += 1;
    pop_total += track.popularity;
  });
  setter((pop_total / track_total));
}