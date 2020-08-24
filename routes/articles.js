const router = require("express").Router();
const Article = require("../models/Article");

// this is dummy data
const data = [
  {
    id: "5f35ba7e1d510f4bad03e9fd",
    title: "veniam proident commodo",
    description:
      "Ea aliquip pariatur sint sint nisi sit culpa culpa ullamco ad quis.",
    body:
      "Voluptate nisi minim et commodo tempor. Do ad proident veniam dolor aute. Lorem nisi veniam cillum sint enim mollit do culpa aute pariatur officia enim labore. Minim eiusmod ea eu pariatur magna. Ipsum culpa officia ut nisi incididunt sint culpa culpa.\n\nSint adipisicing laborum pariatur et deserunt cupidatat commodo aliqua cillum sint adipisicing exercitation sit. Velit quis nulla ipsum fugiat anim culpa et reprehenderit qui consequat ea. Eu proident eu amet voluptate dolore.\n\nEu enim aliqua veniam mollit consectetur qui enim voluptate proident in. Aliquip adipisicing excepteur aliquip minim fugiat sunt ex eiusmod aliqua. Eiusmod irure consequat sunt commodo proident cillum. Officia commodo proident laboris commodo cillum tempor eu officia consequat ipsum. Officia et cillum officia cupidatat. Nulla et laboris voluptate ea ipsum cillum duis occaecat in ad Lorem.",
  },
  {
    id: "5f35ba7ebfbd2329ce33e20d",
    title: "deserunt exercitation ea",
    description:
      "Ullamco ad id anim laborum ad ullamco minim tempor nulla incididunt reprehenderit irure irure cupidatat.",
    body:
      "Eiusmod labore dolor adipisicing deserunt. Laborum aliqua do eu quis nisi dolore consectetur non nulla reprehenderit incididunt officia. Exercitation veniam enim tempor mollit ullamco nostrud tempor aute enim id ut minim laborum qui. Ea eiusmod sit qui consectetur in adipisicing sit sunt irure nulla in. Qui nulla amet minim fugiat et. Sit Lorem aliqua adipisicing excepteur qui esse do nulla minim sunt. Do veniam cillum exercitation ut exercitation magna consequat est in dolore eiusmod commodo laborum proident.\n\nMagna eu do dolore Lorem consectetur nostrud mollit deserunt esse occaecat do nulla. Reprehenderit proident id quis pariatur duis excepteur occaecat aliqua qui. Velit sunt mollit veniam consectetur duis laboris cupidatat ad deserunt mollit sit sit exercitation reprehenderit. Sint laboris ea laborum dolore mollit aliqua minim laborum. Exercitation do excepteur reprehenderit dolor in culpa aliquip consectetur labore labore labore cupidatat dolor fugiat. Velit sint consequat qui labore officia exercitation nisi laboris.\n\nVelit incididunt proident proident ut nulla veniam proident elit dolor id reprehenderit. Ad consectetur in fugiat veniam aliqua. Laboris duis nulla voluptate ullamco. Reprehenderit amet ad ipsum nulla.",
  },
  {
    id: "5f35ba7ecfc8335414c73bf2",
    title: "non non eu",
    description:
      "Cupidatat commodo aute magna deserunt laborum fugiat aute excepteur.",
    body:
      "Non duis cupidatat amet officia proident esse ipsum cupidatat nulla aliqua sint duis. Lorem ipsum in minim labore deserunt nostrud ex in eiusmod voluptate. Eu cillum velit incididunt magna enim qui adipisicing eu tempor in. Pariatur ad labore do sit velit.\n\nTempor irure aliquip ad do. Laboris ad quis sunt excepteur culpa laborum. Cupidatat adipisicing eu nulla dolore reprehenderit. In consectetur aliquip non magna minim nisi. Quis laborum voluptate culpa officia reprehenderit tempor ad qui officia voluptate esse cillum ut cillum. Deserunt fugiat aliquip commodo fugiat sit ipsum irure cillum excepteur quis velit. Excepteur id nulla ut id est pariatur ad.\n\nVoluptate magna pariatur elit eu cupidatat dolor minim laborum. Aliqua cupidatat velit dolor officia excepteur ex aliqua labore reprehenderit occaecat ea fugiat esse. Dolore ullamco adipisicing irure magna aliqua adipisicing qui duis. Sunt reprehenderit excepteur qui officia labore voluptate esse et nisi exercitation velit. Veniam sint velit cillum pariatur eu ex elit aliquip eiusmod laborum eiusmod.",
  },
  {
    id: "5f35ba7e27029ad2059d88bc",
    title: "commodo mollit dolore",
    description:
      "Anim tempor duis Lorem tempor dolor est anim nostrud adipisicing aute.",
    body:
      "Elit fugiat veniam ut nulla commodo veniam. Ad dolore ea velit labore enim incididunt consectetur laborum. Deserunt culpa aliqua velit veniam nostrud nulla amet nulla excepteur.\n\nReprehenderit occaecat aute incididunt laborum culpa fugiat non nisi ut aute qui est voluptate nostrud. Et nulla ipsum eiusmod deserunt consequat laboris Lorem voluptate duis occaecat occaecat. Ea voluptate ipsum do fugiat anim deserunt pariatur tempor exercitation nulla. Ut proident sint enim sit aute ex incididunt laboris reprehenderit Lorem non deserunt. Cupidatat tempor quis tempor nostrud. Ut consequat Lorem ex veniam tempor sunt ex aliqua nisi cillum duis incididunt.\n\nNisi eu esse deserunt pariatur cillum fugiat voluptate et consequat elit ex sint aute velit. Deserunt consequat Lorem labore sunt eu. Et pariatur commodo quis est consectetur laboris laboris. Magna occaecat esse ea labore elit enim dolor magna commodo. Nostrud excepteur cupidatat laboris et esse amet ut aliquip incididunt occaecat consectetur ex incididunt.",
  },
  {
    id: "5f35ba7eb6e8e4af6706ac1b",
    title: "veniam nisi dolor",
    description:
      "Eiusmod eu anim officia ullamco nulla adipisicing ullamco ad est consequat sint.",
    body:
      "Id nulla qui aute cupidatat qui do deserunt sunt qui incididunt. Cupidatat mollit amet deserunt nulla nostrud amet officia duis sunt. Sit aute laborum esse do amet irure reprehenderit consequat. Amet minim aliqua proident sit incididunt mollit deserunt eiusmod exercitation proident cillum excepteur adipisicing. Non incididunt duis esse Lorem laborum incididunt et Lorem exercitation est nisi.\n\nMollit proident aliquip id minim sint velit amet quis eu. Cillum ut ex adipisicing culpa do commodo cillum excepteur minim reprehenderit. Ipsum eiusmod irure voluptate sit do sit. Tempor aliqua incididunt nulla duis ut voluptate sint aute do sint adipisicing proident nostrud. Esse mollit sint sint sunt quis ea.\n\nMinim mollit et labore deserunt ex adipisicing deserunt labore laborum pariatur excepteur minim. Labore ea voluptate minim aliquip qui aliquip eu ipsum consequat occaecat officia ut amet nisi. Duis nisi ut occaecat commodo minim elit amet sunt aliqua dolore labore tempor quis. Minim aliqua dolore proident elit est ullamco enim. Nisi Lorem nulla sunt irure eu commodo ullamco voluptate amet enim consectetur fugiat do culpa. Anim minim adipisicing exercitation fugiat elit laboris occaecat amet tempor qui labore pariatur.",
  },
  {
    id: "5f35ba7eb96b03df6f1e6cc5",
    title: "aliquip culpa eu",
    description:
      "Consequat Lorem duis commodo labore eiusmod sit ea aute ex id aute.",
    body:
      "Pariatur adipisicing culpa anim quis duis nulla est nulla non culpa. Id culpa non tempor culpa eu commodo nulla occaecat. In commodo sit officia voluptate mollit nostrud officia nostrud velit commodo in velit adipisicing incididunt.\n\nAute eiusmod anim nisi cillum. Eu eiusmod aliquip exercitation enim aliquip nisi ut aute consequat ipsum dolore magna. Fugiat enim amet esse duis enim reprehenderit mollit et occaecat. Pariatur eu voluptate laboris sit.\n\nAmet laborum laborum occaecat sint eiusmod irure do deserunt excepteur ea sint eu tempor. Qui mollit in duis sit deserunt minim proident aute voluptate ad mollit adipisicing. Voluptate excepteur qui elit in in voluptate irure.",
  },
  {
    id: "5f35ba7eda66d5011f904c04",
    title: "minim qui esse",
    description: "Ut est amet nisi laboris ea tempor velit sint et ut.",
    body:
      "Nulla fugiat officia elit labore cillum et ad eu minim ad sint esse. Aliqua dolore voluptate occaecat veniam laboris minim nisi et adipisicing. Sunt et culpa laborum magna deserunt labore ad labore do nostrud non amet velit minim. Dolore anim ullamco irure qui ipsum dolor ex ullamco.\n\nCupidatat magna elit veniam irure nisi tempor deserunt minim amet. Elit laborum magna sit aute eiusmod aute Lorem irure ad. Irure excepteur sunt do irure anim nostrud quis pariatur. Eiusmod mollit eiusmod esse proident minim aliquip pariatur eu occaecat dolore proident aliqua officia commodo. Lorem quis cupidatat ad quis. Exercitation adipisicing proident aliqua minim eu Lorem Lorem commodo nisi labore in.\n\nLaborum id nisi quis aute. Sunt amet incididunt reprehenderit voluptate exercitation non exercitation nulla fugiat. Id eiusmod magna quis dolor. Commodo tempor elit deserunt elit Lorem esse.",
  },
  {
    id: "5f35ba7e55d97af3ead3b468",
    title: "adipisicing laboris Lorem",
    description:
      "Quis non Lorem sint enim tempor nulla officia voluptate anim incididunt.",
    body:
      "Ea voluptate occaecat laboris voluptate proident nulla cupidatat incididunt reprehenderit nostrud consectetur sit labore. Reprehenderit exercitation laboris ex ullamco culpa esse irure eu ad. Velit ex consequat veniam id laboris duis mollit. Et fugiat minim do id cillum ullamco sunt ex cillum proident labore quis cillum cillum. Eiusmod ipsum culpa officia eu sunt nostrud cupidatat enim labore cupidatat ea. Duis nulla elit aliqua aute fugiat. Eiusmod mollit ex proident do laborum ipsum sit laboris tempor tempor id excepteur.\n\nLaboris consectetur ea amet ipsum laboris culpa culpa enim officia ex. Non et irure aliqua excepteur ex irure est. Velit nisi culpa sit tempor. Sint ipsum officia et consectetur in quis amet est.\n\nSint in deserunt laboris magna Lorem officia ut amet deserunt. Pariatur ex commodo voluptate non fugiat sint non ea. Quis aute consectetur eiusmod anim incididunt enim id magna exercitation tempor irure culpa proident et. Quis officia magna cillum ea ex aliqua consectetur aute exercitation nisi esse magna. Velit minim dolore non ullamco pariatur ipsum sint duis officia enim ex ad. Laboris nisi reprehenderit commodo velit minim aute aliqua ullamco ea. Amet exercitation incididunt adipisicing id.",
  },
  {
    id: "5f35ba7e70561ecfa0e2e422",
    title: "et excepteur consequat",
    description: "Occaecat laborum velit cillum aute dolore consequat Lorem.",
    body:
      "Consequat commodo enim duis sit consequat nisi Lorem elit mollit aliquip. Est magna et ex officia est id duis excepteur. Ullamco minim in culpa aliquip laborum est aliqua elit est cillum nostrud.\n\nIpsum consequat deserunt officia pariatur incididunt irure excepteur. Laborum ad nulla elit proident cupidatat ea dolore aliquip est ex proident aliquip magna. Exercitation consectetur ex dolore nostrud ut nostrud aliquip pariatur quis pariatur officia ullamco adipisicing sit.\n\nUt do eu occaecat nostrud velit. Commodo incididunt mollit Lorem qui duis laborum pariatur ut nostrud Lorem occaecat in. Minim laborum sint tempor cupidatat sint incididunt adipisicing. Incididunt aliquip exercitation commodo ut duis sit excepteur occaecat excepteur.",
  },
  {
    id: "5f35ba7e61935a53626f817a",
    title: "cupidatat qui anim",
    description:
      "Culpa culpa nulla ex Lorem in do consequat enim aliqua mollit.",
    body:
      "Labore nostrud pariatur consectetur voluptate veniam sunt deserunt adipisicing deserunt cillum amet cillum nulla. Sint consequat aliqua anim magna qui officia tempor ex deserunt dolor commodo labore voluptate. Ex pariatur exercitation cillum pariatur officia quis. Ea mollit eu ex id nisi eiusmod ad culpa voluptate veniam irure adipisicing aliqua.\n\nDolor enim tempor sit ipsum irure in officia. Eiusmod et officia elit eu voluptate id cupidatat. Laborum velit nisi ullamco laborum proident proident mollit nisi. Exercitation labore Lorem cillum elit consectetur do anim do do ullamco reprehenderit in. Ullamco officia excepteur mollit sit adipisicing. Ipsum in ipsum nisi qui non reprehenderit ullamco deserunt do ullamco. Excepteur ullamco commodo ullamco aliquip culpa amet tempor eiusmod.\n\nEt irure nostrud enim cillum ut reprehenderit exercitation dolor aliquip non Lorem consequat fugiat. Ad eiusmod nostrud ea eu non deserunt velit ea laborum labore. Duis aliqua eu et enim do et amet proident proident voluptate ea ex.",
  },
  {
    id: "5f35ba7e9e432d0fdca54a59",
    title: "sunt ex sunt",
    description:
      "Esse Lorem laborum culpa ipsum sunt magna exercitation esse fugiat veniam fugiat Lorem.",
    body:
      "Irure ea sint et irure mollit laborum pariatur qui. Nulla labore est anim incididunt. Lorem laboris ad velit reprehenderit magna aliquip anim tempor mollit velit. Incididunt esse Lorem qui veniam do exercitation aliquip laborum. Officia eiusmod pariatur sit veniam dolore incididunt voluptate. Quis quis eu tempor mollit qui nulla voluptate adipisicing.\n\nEst fugiat officia duis deserunt ullamco id reprehenderit. Fugiat ullamco do mollit proident incididunt aliquip dolor aute eiusmod. Do enim magna proident et officia do in quis ex tempor laboris. Exercitation cupidatat sunt magna cillum elit commodo ipsum reprehenderit laboris. Veniam occaecat ad et ex consequat labore dolore ea fugiat elit nostrud incididunt ipsum sint.\n\nLaboris velit fugiat sit consectetur reprehenderit dolore. Culpa nulla veniam amet aliqua ad et aute dolore velit proident veniam. Voluptate fugiat veniam elit duis id laboris laboris anim. Adipisicing aliqua ut fugiat cillum mollit ad eiusmod duis et fugiat esse qui fugiat. Laborum nulla est consectetur sint ullamco nulla adipisicing mollit laborum deserunt. Cillum sint tempor mollit ullamco.",
  },
  {
    id: "5f35ba7ec08aae35930af116",
    title: "consequat excepteur occaecat",
    description: "Ea proident anim aute proident.",
    body:
      "Anim incididunt et cillum ullamco exercitation aute enim enim ad amet est mollit cupidatat commodo. Deserunt nostrud minim aliquip aliquip tempor amet consequat nisi consequat. Irure ut cupidatat ullamco in magna. Officia nostrud anim eu exercitation commodo. Quis esse adipisicing occaecat incididunt ea sit fugiat enim mollit.\n\nCupidatat anim consequat et sunt culpa. Dolore culpa do commodo tempor ex incididunt velit non officia dolore nisi ut laboris. Anim ea ea cillum duis ullamco amet sunt reprehenderit incididunt magna dolore excepteur. Magna anim velit ullamco aute ut in cillum. Dolor exercitation nulla deserunt excepteur deserunt in quis ipsum est sint reprehenderit nulla aute Lorem. Nisi proident labore duis sit est officia do elit. Mollit commodo ipsum et mollit magna quis incididunt nulla consequat non exercitation tempor sunt.\n\nSit ex ea dolore ad sit officia amet eiusmod cupidatat enim nulla occaecat eiusmod. Et aute voluptate culpa reprehenderit labore deserunt. Et eiusmod tempor magna dolore.",
  },
  {
    id: "5f35ba7edf9bc01c3fbad870",
    title: "voluptate sint esse",
    description: "Minim tempor adipisicing laborum consequat.",
    body:
      "Sunt id mollit sint sint consequat quis. Anim id enim anim excepteur aliqua minim. Sit nostrud aliquip labore ullamco ipsum nulla aliquip dolor nostrud aute dolor. Excepteur ut culpa sit cupidatat fugiat officia Lorem anim do Lorem reprehenderit. Aliqua culpa proident occaecat ipsum duis consectetur aliquip cillum.\n\nUllamco aliquip mollit tempor occaecat elit commodo qui proident sunt eiusmod proident. Anim sunt labore consectetur excepteur laborum nulla exercitation non cupidatat. Veniam aute ad laboris velit eiusmod ad. Est ipsum proident aliquip exercitation cupidatat irure quis laborum enim mollit id proident sit. Aliqua quis laborum exercitation minim nulla aliquip ex et ad et Lorem elit nulla. Anim aliqua incididunt nisi elit in.\n\nAmet amet mollit enim anim laboris ullamco reprehenderit. Dolore adipisicing excepteur non minim ut occaecat pariatur ut. Quis tempor occaecat sunt ex sunt reprehenderit fugiat id excepteur eu nostrud quis officia. Eiusmod nostrud ipsum reprehenderit laborum ullamco occaecat excepteur ut minim est. Commodo quis nisi do nulla ipsum laboris. Deserunt nisi anim ut non dolor ut eu ipsum labore Lorem id consectetur consectetur id.",
  },
  {
    id: "5f35ba7ee363ab0e8803750c",
    title: "nostrud qui labore",
    description: "Dolore duis consectetur nisi aliqua sit.",
    body:
      "Cillum adipisicing ut sunt culpa duis in dolor. Lorem eu do eu deserunt aute elit duis ad Lorem do ea. Commodo magna voluptate quis aliqua ut anim anim sit tempor adipisicing elit do fugiat voluptate. Aliqua anim ad pariatur deserunt sunt ullamco id dolor non sunt laborum. Qui amet aute eiusmod deserunt ex laboris est reprehenderit magna ex est. Eiusmod eiusmod consequat nulla amet cillum aute voluptate pariatur.\n\nIpsum proident Lorem commodo aliqua pariatur ex. Lorem nostrud Lorem ipsum velit. Tempor nisi tempor exercitation aute. Nisi elit in pariatur mollit laboris eu sint.\n\nCupidatat ut sint occaecat laboris dolor ut. Id Lorem irure sint quis magna. Sint consectetur pariatur irure in est ex ea excepteur. Enim cupidatat sint velit Lorem voluptate laborum proident excepteur. Anim amet mollit proident duis aliqua veniam.",
  },
  {
    id: "5f35ba7eb4a8e6328eb34a84",
    title: "qui magna cillum",
    description: "Ad fugiat ipsum culpa duis mollit consectetur pariatur.",
    body:
      "Irure aliqua ut cupidatat do est eu id consequat et quis commodo ullamco. Duis nisi ipsum veniam id magna. Aliqua laboris laborum nisi consequat aute consectetur eiusmod ut occaecat elit reprehenderit fugiat labore cillum.\n\nAnim sint eu amet eiusmod amet eu laborum in excepteur et. Lorem eu duis magna ipsum ea id ipsum tempor. Commodo excepteur qui duis elit aliqua eiusmod. Eu qui ipsum ullamco veniam adipisicing consectetur ullamco occaecat nostrud deserunt duis aliquip cillum Lorem.\n\nCulpa Lorem aliquip sunt consectetur aliqua sunt nostrud proident in dolore dolor. Id irure ad do commodo deserunt irure dolor nisi sint ipsum. Eu ut ut Lorem mollit sint anim consectetur nostrud. Nisi magna anim eu pariatur eu ea aliquip aute aliquip. Est velit deserunt incididunt ad nisi magna tempor non sunt in sit.",
  },
];
////////////





router.get("", (req, res) => {
  console.log("Get request for all articles received...");
  Article.find({})
    .sort({ createdAt: "desc" })
    .then(function (results) {
      return res.send(results);
    });
});

router.post("", (req, res) => {
  console.log(`Post request received...`);
  console.log(req.body);
  const article = new Article(req.body);
  article.save().then((result) => {
    return res.status(201).send(result);
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(`get request for article ${id} received...`);

  Article.findById(id).then(function (article) {
    if (!article) {
      const error = new Error("Article not Found");
      next(error);
    } else {
      return res.send(article);
    }
  });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(`Update request for article ${id} received...`);

  // Article.findByIdAndUpdate(id, req.body, {new: true}).then((article) => {

  Article.findByIdAndUpdate(id, req.body).then((article) => {
    if (!article) {
      const error = new Error("Article not Found");
      next(error);
    } else {
      return res.send(article);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(`Delete request for article ${id} received...`);
  Article.findByIdAndDelete(id).then((article) => {
    if (!article) {
      const error = new Error("Article not Found");
      next(error);
    } else {
      return res.send(article);
    }
  });
});

module.exports = router;
