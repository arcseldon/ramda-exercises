
// http://fr.umio.us/why-ramda/
var R = ramda;

var data = [
  {
    "name": "Brett",
    "email": "turpis.non@quisturpis.co.uk",
    "company": "Sem LLP",
    "age": 57
  },
  {
    "name": "Kamal",
    "email": "odio.Nam@neque.org",
    "company": "Tincidunt Orci Incorporated",
    "age": 37
  },
  {
    "name": "Jakeem",
    "email": "Donec.nibh.enim@libero.net",
    "company": "Facilisis Vitae Ltd",
    "age": 31
  },
  {
    "name": "Gareth",
    "email": "elit.pretium@orciUtsemper.net",
    "company": "Vel Est Tempor Consulting",
    "age": 27
  },
  {
    "name": "Barclay",
    "email": "sodales.elit@netus.com",
    "company": "Primis In Faucibus LLC",
    "age": 25
  },
  {
    "name": "Abel",
    "email": "ultrices@risus.ca",
    "company": "Aliquam Ultrices Limited",
    "age": 46
  },
  {
    "name": "Allen",
    "email": "vel.convallis@eu.co.uk",
    "company": "Nulla Facilisis PC",
    "age": 42
  },
  {
    "name": "Ulric",
    "email": "cursus.Nunc.mauris@pedenec.ca",
    "company": "Blandit Nam Industries",
    "age": 60
  },
  {
    "name": "Jacob",
    "email": "semper.erat@ametluctus.edu",
    "company": "Sapien Aenean Massa Corporation",
    "age": 47
  },
  {
    "name": "Eagan",
    "email": "dolor.egestas@scelerisquescelerisque.co.uk",
    "company": "Amet Institute",
    "age": 40
  },
  {
    "name": "Michael",
    "email": "placerat.velit.Quisque@quis.com",
    "company": "Justo Eu LLC",
    "age": 56
  },
  {
    "name": "Reuben",
    "email": "suscipit.nonummy.Fusce@mauris.co.uk",
    "company": "Turpis Egestas Fusce LLP",
    "age": 23
  },
  {
    "name": "Orson",
    "email": "dui@cursuset.ca",
    "company": "Eu Foundation",
    "age": 33
  },
  {
    "name": "Rajah",
    "email": "urna@vehicula.co.uk",
    "company": "Diam Associates",
    "age": 37
  },
  {
    "name": "Malachi",
    "email": "tellus.id@consectetuerrhoncusNullam.org",
    "company": "Pede Institute",
    "age": 47
  },
  {
    "name": "Todd",
    "email": "mollis.Duis.sit@vitaesodales.co.uk",
    "company": "Sem Vitae Aliquam Limited",
    "age": 59
  },
  {
    "name": "Daniel",
    "email": "sapien@nequeIn.co.uk",
    "company": "Nisl Maecenas Malesuada Ltd",
    "age": 54
  },
  {
    "name": "Vernon",
    "email": "Aenean@Pellentesqueultricies.ca",
    "company": "Vestibulum Ante Ipsum Company",
    "age": 32
  },
  {
    "name": "Buckminster",
    "email": "quam.a.felis@tortoratrisus.org",
    "company": "Lorem Eget Industries",
    "age": 33
  },
  {
    "name": "Jonas",
    "email": "quis.massa@telluseu.edu",
    "company": "Risus Nulla Institute",
    "age": 26
  },
  {
    "name": "Henry",
    "email": "tristique.pharetra.Quisque@egestasadui.com",
    "company": "Eu Metus Associates",
    "age": 23
  },
  {
    "name": "Zachary",
    "email": "libero@imperdietnonvestibulum.edu",
    "company": "Molestie Sodales LLP",
    "age": 27
  },
  {
    "name": "Ignatius",
    "email": "iaculis@Integervulputate.edu",
    "company": "Est Mauris Eu Limited",
    "age": 46
  },
  {
    "name": "Warren",
    "email": "elit.Aliquam@Nullatemporaugue.com",
    "company": "Non Arcu Vivamus Corp.",
    "age": 35
  },
  {
    "name": "Merrill",
    "email": "feugiat.non@semconsequat.edu",
    "company": "Bibendum Corporation",
    "age": 56
  },
  {
    "name": "Camden",
    "email": "accumsan@velitPellentesqueultricies.ca",
    "company": "Ac Mattis Semper Associates",
    "age": 51
  },
  {
    "name": "Cruz",
    "email": "convallis.dolor.Quisque@velmauris.edu",
    "company": "Tortor Nunc Corporation",
    "age": 28
  },
  {
    "name": "Jared",
    "email": "ullamcorper.velit.in@eget.net",
    "company": "Vulputate Nisi Sem LLC",
    "age": 49
  },
  {
    "name": "Brent",
    "email": "pede@semper.com",
    "company": "Convallis Foundation",
    "age": 57
  },
  {
    "name": "Moses",
    "email": "tellus@nonarcu.net",
    "company": "Tortor PC",
    "age": 52
  },
  {
    "name": "Zane",
    "email": "vitae@inlobortis.org",
    "company": "Leo Vivamus Nibh Institute",
    "age": 47
  },
  {
    "name": "Lewis",
    "email": "vel@enimmitempor.com",
    "company": "Rhoncus Proin Nisl PC",
    "age": 57
  },
  {
    "name": "Stewart",
    "email": "in@commodoauctor.ca",
    "company": "Ullamcorper Consulting",
    "age": 40
  },
  {
    "name": "Ferris",
    "email": "Proin@nisi.ca",
    "company": "Quis Diam Pellentesque Incorporated",
    "age": 33
  },
  {
    "name": "Nissim",
    "email": "Aenean.euismod.mauris@penatibusetmagnis.com",
    "company": "Donec Fringilla Corporation",
    "age": 47
  },
  {
    "name": "Ethan",
    "email": "posuere.enim.nisl@Morbinequetellus.co.uk",
    "company": "Aliquet Lobortis Nisi LLC",
    "age": 40
  },
  {
    "name": "Knox",
    "email": "dolor.tempus@velesttempor.co.uk",
    "company": "Elementum Lorem Ut Industries",
    "age": 35
  },
  {
    "name": "Elliott",
    "email": "ipsum@Aeneanegetmetus.ca",
    "company": "Tincidunt Adipiscing Incorporated",
    "age": 43
  },
  {
    "name": "Dustin",
    "email": "diam.dictum@euelitNulla.edu",
    "company": "Mattis Ornare Company",
    "age": 50
  },
  {
    "name": "Baxter",
    "email": "Aliquam.gravida@luctuset.ca",
    "company": "Eu Incorporated",
    "age": 31
  },
  {
    "name": "Joseph",
    "email": "orci@tinciduntadipiscingMauris.org",
    "company": "Ac Libero Nec Inc.",
    "age": 42
  },
  {
    "name": "Lev",
    "email": "a.arcu@massaSuspendisse.net",
    "company": "Commodo Auctor Velit Inc.",
    "age": 29
  },
  {
    "name": "Adam",
    "email": "Donec.dignissim@malesuadavelconvallis.com",
    "company": "Fermentum Vel Industries",
    "age": 26
  },
  {
    "name": "Dieter",
    "email": "Fusce.diam.nunc@Maurisvel.co.uk",
    "company": "Eleifend Industries",
    "age": 60
  },
  {
    "name": "Byron",
    "email": "erat.volutpat.Nulla@Namligula.ca",
    "company": "Et Lacinia Vitae Institute",
    "age": 38
  },
  {
    "name": "Carter",
    "email": "enim.commodo@Utnecurna.edu",
    "company": "Sed Ltd",
    "age": 45
  },
  {
    "name": "Silas",
    "email": "ullamcorper@senectuset.edu",
    "company": "Eu PC",
    "age": 54
  },
  {
    "name": "Curran",
    "email": "Duis.gravida.Praesent@vitae.com",
    "company": "Convallis In Corporation",
    "age": 24
  },
  {
    "name": "Colin",
    "email": "diam.Duis@egetipsumDonec.net",
    "company": "Eget Metus Consulting",
    "age": 27
  },
  {
    "name": "Abel",
    "email": "euismod.ac@egetmetuseu.ca",
    "company": "Pharetra Ut LLP",
    "age": 57
  },
  {
    "name": "Kermit",
    "email": "blandit.congue.In@Vivamussitamet.com",
    "company": "Orci Sem Corp.",
    "age": 32
  },
  {
    "name": "Jerry",
    "email": "magna.et.ipsum@Quisqueporttitor.org",
    "company": "Id Enim Institute",
    "age": 22
  },
  {
    "name": "George",
    "email": "purus.accumsan@Nunclaoreet.com",
    "company": "Proin LLP",
    "age": 47
  },
  {
    "name": "Isaac",
    "email": "Curae.Donec.tincidunt@blanditviverraDonec.net",
    "company": "Orci Tincidunt Corporation",
    "age": 31
  },
  {
    "name": "Odysseus",
    "email": "tellus@eget.com",
    "company": "Purus Institute",
    "age": 21
  },
  {
    "name": "Elvis",
    "email": "neque.Sed.eget@venenatisamagna.net",
    "company": "Posuere Company",
    "age": 39
  },
  {
    "name": "Garth",
    "email": "ornare.placerat.orci@infelisNulla.ca",
    "company": "Suspendisse Aliquet Corp.",
    "age": 30
  },
  {
    "name": "Shad",
    "email": "Mauris@Nullamvitaediam.co.uk",
    "company": "Fusce Institute",
    "age": 56
  },
  {
    "name": "Quinlan",
    "email": "aliquet@at.ca",
    "company": "Nulla At Inc.",
    "age": 26
  },
  {
    "name": "Kane",
    "email": "dolor@eleifendvitae.net",
    "company": "Imperdiet Limited",
    "age": 60
  },
  {
    "name": "Kermit",
    "email": "aliquam.eu@Duisacarcu.co.uk",
    "company": "Aliquet Proin Velit Incorporated",
    "age": 21
  },
  {
    "name": "Rajah",
    "email": "est@nequeNullamut.com",
    "company": "Donec PC",
    "age": 35
  },
  {
    "name": "Leo",
    "email": "neque.Morbi@adipiscing.net",
    "company": "Nec LLP",
    "age": 34
  },
  {
    "name": "Duncan",
    "email": "cursus.purus@eutemporerat.com",
    "company": "Sem Egestas Ltd",
    "age": 31
  },
  {
    "name": "Alden",
    "email": "et.magnis@maurisInteger.ca",
    "company": "Eu LLP",
    "age": 27
  },
  {
    "name": "Xavier",
    "email": "vitae.sodales@Maecenasmi.edu",
    "company": "Vulputate Velit Eu Company",
    "age": 33
  },
  {
    "name": "Salvador",
    "email": "pretium@elementumsemvitae.edu",
    "company": "Eu Limited",
    "age": 47
  },
  {
    "name": "Octavius",
    "email": "interdum@sollicitudinorcisem.edu",
    "company": "Pede Corp.",
    "age": 57
  },
  {
    "name": "Reuben",
    "email": "augue@euturpis.ca",
    "company": "Cras PC",
    "age": 29
  },
  {
    "name": "Ulric",
    "email": "hymenaeos@gravidanunc.net",
    "company": "Libero Foundation",
    "age": 40
  },
  {
    "name": "Kadeem",
    "email": "sit.amet@semperpretiumneque.co.uk",
    "company": "Quis Pede PC",
    "age": 25
  },
  {
    "name": "Raymond",
    "email": "dignissim@Morbisitamet.edu",
    "company": "Mi Industries",
    "age": 46
  },
  {
    "name": "Howard",
    "email": "pharetra.nibh@Crasconvallis.net",
    "company": "Semper Limited",
    "age": 46
  },
  {
    "name": "Daquan",
    "email": "diam.lorem.auctor@rutrum.net",
    "company": "Enim LLC",
    "age": 47
  },
  {
    "name": "Preston",
    "email": "sed.leo@temporarcu.com",
    "company": "Arcu Curabitur Ut Incorporated",
    "age": 30
  },
  {
    "name": "Forrest",
    "email": "nec.urna@sitametluctus.net",
    "company": "Nisi Sem Semper Associates",
    "age": 28
  },
  {
    "name": "Octavius",
    "email": "pharetra@blanditenimconsequat.co.uk",
    "company": "In Mi Incorporated",
    "age": 44
  },
  {
    "name": "Peter",
    "email": "tellus.id@sed.co.uk",
    "company": "Aliquet Diam Sed Corp.",
    "age": 49
  },
  {
    "name": "Stewart",
    "email": "arcu.et.pede@loremfringilla.edu",
    "company": "Vivamus Ltd",
    "age": 60
  },
  {
    "name": "Gannon",
    "email": "convallis.est.vitae@Suspendissesagittis.co.uk",
    "company": "Id Corp.",
    "age": 31
  },
  {
    "name": "Alvin",
    "email": "Integer.aliquam.adipiscing@id.net",
    "company": "Id Associates",
    "age": 56
  },
  {
    "name": "Baxter",
    "email": "cubilia.Curae.Phasellus@lobortismauris.co.uk",
    "company": "Vel Limited",
    "age": 21
  },
  {
    "name": "Omar",
    "email": "elit.pretium.et@estNunclaoreet.co.uk",
    "company": "Mauris Rhoncus Inc.",
    "age": 57
  },
  {
    "name": "Adam",
    "email": "malesuada.fringilla.est@bibendumsed.co.uk",
    "company": "Integer PC",
    "age": 35
  },
  {
    "name": "Finn",
    "email": "et@Quisquetinciduntpede.org",
    "company": "Pellentesque Tincidunt Tempus PC",
    "age": 38
  },
  {
    "name": "Finn",
    "email": "lacus@aliquetsem.ca",
    "company": "Blandit Mattis Cras Limited",
    "age": 24
  },
  {
    "name": "Brett",
    "email": "Donec.feugiat.metus@placeratvelitQuisque.edu",
    "company": "Non Lobortis Consulting",
    "age": 31
  },
  {
    "name": "Ignatius",
    "email": "pretium@urna.net",
    "company": "Vestibulum PC",
    "age": 42
  },
  {
    "name": "Cyrus",
    "email": "consectetuer@famesacturpis.ca",
    "company": "Mauris Inc.",
    "age": 29
  },
  {
    "name": "Justin",
    "email": "rutrum.non.hendrerit@Nuncac.org",
    "company": "Id Ante Consulting",
    "age": 24
  },
  {
    "name": "Marvin",
    "email": "libero.nec.ligula@idantedictum.com",
    "company": "Mauris Ut Industries",
    "age": 33
  },
  {
    "name": "Sebastian",
    "email": "ut.eros@Cumsociisnatoque.com",
    "company": "Ipsum Curabitur Consequat Company",
    "age": 55
  },
  {
    "name": "Colton",
    "email": "interdum@Donecfringilla.ca",
    "company": "Porta Elit A LLC",
    "age": 33
  },
  {
    "name": "Porter",
    "email": "Integer@facilisisnon.co.uk",
    "company": "Eleifend Nec PC",
    "age": 22
  },
  {
    "name": "Matthew",
    "email": "sed@odio.net",
    "company": "Aliquam Industries",
    "age": 49
  },
  {
    "name": "Moses",
    "email": "habitant@Sed.edu",
    "company": "Et Magnis Dis LLC",
    "age": 40
  },
  {
    "name": "Silas",
    "email": "sem@ultricesposuere.org",
    "company": "Sodales Institute",
    "age": 51
  },
  {
    "name": "Brock",
    "email": "mi.enim@cursusnon.edu",
    "company": "Et Tristique Pellentesque Corp.",
    "age": 40
  },
  {
    "name": "Stephen",
    "email": "nunc.id.enim@sapiengravida.co.uk",
    "company": "Nunc Associates",
    "age": 51
  },
  {
    "name": "Odysseus",
    "email": "ligula.elit@semutdolor.net",
    "company": "Hendrerit Neque LLP",
    "age": 31
  }
];

QUnit.test( "test something", function(assert) {
  var groupByInitial = R.groupBy(function (person) {
    return R.charAt(0, person.name);
  });
  var formula = R.compose(groupByInitial, R.map(R.pick(['name', 'age'])));
  console.log(formula(data));
});
