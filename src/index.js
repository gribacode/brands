import * as d3 from "d3";
import data from "./data/data.csv";

d3.csv(data, (item) => console.log(item));
