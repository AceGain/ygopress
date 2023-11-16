import {seriesList} from "../../../data/series/series";

export default {
    paths() {
        let pathArray: Object[] = [];
        Object.entries(seriesList["2302"]).forEach((series) => {
            pathArray.push({params: {paper: series[0], series: series[1]}, content: '# ' + series[1].title})
        })
        return pathArray
    }
}
