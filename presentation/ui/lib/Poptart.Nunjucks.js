// Poptart.Nunjucks
////////////////////////////////
import nunjucks from "nunjucks";


const nunjucksPrecompiled = {};
const nunjucksEnvironment = new nunjucks.Environment(new nunjucks.PrecompiledLoader(Object.create(nunjucksPrecompiled, {})), {web: {useCache: false}, noCache: true});
//nunjucks.configure('/templates', {web: {useCache: false}, noCache: true});

export { nunjucks, nunjucksEnvironment };