let students = [
    {"first_name":"Wilmar","last_name":"Labb","email":"wlabb0@amazon.com","gender":"Male","birthday":"1/15/1986"},
    {"first_name":"Ely","last_name":"Leetham","email":"eleetham1@globo.com","gender":"Male","birthday":"11/18/1985"},
    {"first_name":"Cinda","last_name":"Luesley","email":"cluesley2@vk.com","gender":"Female","birthday":"1/1/2007"},
    {"first_name":"Aretha","last_name":"Killbey","email":"akillbey3@discovery.com","gender":"Female","birthday":"3/18/1995"},
    {"first_name":"Janeczka","last_name":"Mansel","email":"jmansel4@spiegel.de","gender":"Female","birthday":"6/7/1987"},
    {"first_name":"Nicolette","last_name":"Havoc","email":"nhavoc5@artisteer.com","gender":"Female","birthday":"10/27/1993"},
    {"first_name":"Rhoda","last_name":"Creffield","email":"rcreffield6@xinhuanet.com","gender":"Female","birthday":"5/17/2013"},
    {"first_name":"King","last_name":"Stanyer","email":"kstanyer7@jigsy.com","gender":"Male","birthday":"6/30/2000"},
    {"first_name":"Alia","last_name":"Scally","email":"ascally8@tinyurl.com","gender":"Female","birthday":"12/25/1989"},
    {"first_name":"Tandi","last_name":"Lathleiffure","email":"tlathleiffure9@ebay.com","gender":"Female","birthday":"8/14/1986"},
    {"first_name":"Anny","last_name":"Hencke","email":"ahenckea@naver.com","gender":"Female","birthday":"1/6/1991"},
    {"first_name":"Bink","last_name":"Goneau","email":"bgoneaub@infoseek.co.jp","gender":"Male","birthday":"11/11/2007"},
    {"first_name":"Marianne","last_name":"Pidgeley","email":"mpidgeleyc@buzzfeed.com","gender":"Female","birthday":"3/24/2005"},
    {"first_name":"Boone","last_name":"Drover","email":"bdroverd@ed.gov","gender":"Male","birthday":"7/7/1981"},
    {"first_name":"Karolina","last_name":"Newey","email":"kneweye@statcounter.com","gender":"Female","birthday":"1/7/1999"},
    {"first_name":"Tarrance","last_name":"Siemons","email":"tsiemonsf@uol.com.br","gender":"Male","birthday":"4/19/2015"},
    {"first_name":"Panchito","last_name":"Lee","email":"pleeg@ustream.tv","gender":"Male","birthday":"1/4/1992"},
    {"first_name":"Rodie","last_name":"Muffin","email":"rmuffinh@delicious.com","gender":"Female","birthday":"8/8/2001"},
    {"first_name":"Orran","last_name":"Baggalley","email":"obaggalleyi@wikipedia.org","gender":"Male","birthday":"7/5/1986"},
    {"first_name":"Rickie","last_name":"Tezure","email":"rtezurej@geocities.com","gender":"Male","birthday":"4/3/2001"},
    {"first_name":"Kassi","last_name":"Donner","email":"kdonnerk@europa.eu","gender":"Female","birthday":"4/23/1998"},
    {"first_name":"Tawnya","last_name":"Timpany","email":"ttimpanyl@netscape.com","gender":"Female","birthday":"1/11/2003"},
    {"first_name":"Lyman","last_name":"Crenshaw","email":"lcrenshawm@yolasite.com","gender":"Male","birthday":"5/31/2018"},
    {"first_name":"Bibby","last_name":"Bowyer","email":"bbowyern@bravesites.com","gender":"Female","birthday":"3/26/1987"},
    {"first_name":"Abbey","last_name":"Batrip","email":"abatripo@webs.com","gender":"Male","birthday":"11/17/2006"},
    {"first_name":"Micheline","last_name":"Aldersea","email":"malderseap@imdb.com","gender":"Female","birthday":"2/12/1986"},
    {"first_name":"Bennie","last_name":"Cremen","email":"bcremenq@acquirethisname.com","gender":"Male","birthday":"7/6/2009"},
    {"first_name":"Riki","last_name":"Itzik","email":"ritzikr@posterous.com","gender":"Female","birthday":"10/14/2010"},
    {"first_name":"Normand","last_name":"De la Harpe","email":"ndelaharpes@virginia.edu","gender":"Male","birthday":"9/2/1980"},
    {"first_name":"Elton","last_name":"Frohock","email":"efrohockt@google.com","gender":"Male","birthday":"10/6/1998"},
    {"first_name":"Jacqui","last_name":"Jentin","email":"jjentinu@phpbb.com","gender":"Female","birthday":"3/17/1998"},
    {"first_name":"Milicent","last_name":"Cowtherd","email":"mcowtherdv@gizmodo.com","gender":"Female","birthday":"5/18/1993"},
    {"first_name":"Benjamen","last_name":"Batrim","email":"bbatrimw@army.mil","gender":"Male","birthday":"7/2/2010"},
    {"first_name":"Vivian","last_name":"Grime","email":"vgrimex@fda.gov","gender":"Female","birthday":"9/27/1990"},
    {"first_name":"Theresita","last_name":"Foss","email":"tfossy@dmoz.org","gender":"Female","birthday":"11/28/2005"},
    {"first_name":"Caressa","last_name":"Odgers","email":"codgersz@163.com","gender":"Female","birthday":"12/6/1986"},
    {"first_name":"Alvan","last_name":"Coogan","email":"acoogan10@state.tx.us","gender":"Male","birthday":"11/3/1998"},
    {"first_name":"Rafaellle","last_name":"Hapgood","email":"rhapgood11@angelfire.com","gender":"Male","birthday":"6/19/2010"},
    {"first_name":"Cirilo","last_name":"Chelnam","email":"cchelnam12@addtoany.com","gender":"Male","birthday":"6/8/2014"},
    {"first_name":"Gabie","last_name":"Tomadoni","email":"gtomadoni13@ibm.com","gender":"Male","birthday":"1/25/2018"},
    {"first_name":"Alta","last_name":"Thompstone","email":"athompstone14@nbcnews.com","gender":"Female","birthday":"2/7/1997"},
    {"first_name":"Leo","last_name":"Flewin","email":"lflewin15@skype.com","gender":"Male","birthday":"10/26/2007"},
    {"first_name":"Minor","last_name":"Marven","email":"mmarven16@marketwatch.com","gender":"Male","birthday":"10/23/1993"},
    {"first_name":"Janek","last_name":"Darrigone","email":"jdarrigone17@noaa.gov","gender":"Male","birthday":"11/4/2017"},
    {"first_name":"Ardis","last_name":"Fibbens","email":"afibbens18@msu.edu","gender":"Female","birthday":"3/30/2008"},
    {"first_name":"Pete","last_name":"Ipgrave","email":"pipgrave19@go.com","gender":"Male","birthday":"2/2/2004"},
    {"first_name":"Mitchell","last_name":"Radmore","email":"mradmore1a@sbwire.com","gender":"Male","birthday":"7/29/2006"},
    {"first_name":"Ardene","last_name":"Cheyenne","email":"acheyenne1b@altervista.org","gender":"Female","birthday":"1/4/2009"},
    {"first_name":"Dona","last_name":"Grieg","email":"dgrieg1c@whitehouse.gov","gender":"Female","birthday":"11/25/2005"},
    {"first_name":"Rogerio","last_name":"Bellworthy","email":"rbellworthy1d@freewebs.com","gender":"Male","birthday":"7/1/2009"},
    {"first_name":"Dwayne","last_name":"Cypler","email":"dcypler1e@rakuten.co.jp","gender":"Male","birthday":"4/2/2007"},
    {"first_name":"Andres","last_name":"Joy","email":"ajoy1f@slashdot.org","gender":"Male","birthday":"7/16/1999"},
    {"first_name":"Roxanne","last_name":"Alflatt","email":"ralflatt1g@google.com.hk","gender":"Female","birthday":"8/6/2003"},
    {"first_name":"Pearla","last_name":"Heggs","email":"pheggs1h@nifty.com","gender":"Female","birthday":"1/9/1999"},
    {"first_name":"Gillie","last_name":"Khristoforov","email":"gkhristoforov1i@cloudflare.com","gender":"Female","birthday":"3/30/1991"},
    {"first_name":"Kelly","last_name":"Millions","email":"kmillions1j@springer.com","gender":"Male","birthday":"1/28/2007"},
    {"first_name":"Wenda","last_name":"Duxbarry","email":"wduxbarry1k@netvibes.com","gender":"Female","birthday":"5/9/2017"},
    {"first_name":"Madelyn","last_name":"Blowen","email":"mblowen1l@virginia.edu","gender":"Female","birthday":"8/6/1983"},
    {"first_name":"Glen","last_name":"MacCheyne","email":"gmaccheyne1m@amazon.de","gender":"Male","birthday":"6/20/1995"},
    {"first_name":"Sheilah","last_name":"Middleton","email":"smiddleton1n@ifeng.com","gender":"Female","birthday":"10/15/1983"},
    {"first_name":"Sergei","last_name":"L'oiseau","email":"sloiseau1o@ebay.co.uk","gender":"Male","birthday":"5/6/1993"},
    {"first_name":"Stearne","last_name":"Bulfield","email":"sbulfield1p@yale.edu","gender":"Male","birthday":"8/23/2014"},
    {"first_name":"Eudora","last_name":"Scurman","email":"escurman1q@fastcompany.com","gender":"Female","birthday":"6/15/1991"},
    {"first_name":"Devon","last_name":"Blades","email":"dblades1r@example.com","gender":"Female","birthday":"2/27/1990"},
    {"first_name":"Any","last_name":"Oppery","email":"aoppery1s@github.com","gender":"Male","birthday":"7/1/2019"},
    {"first_name":"Peg","last_name":"Kuna","email":"pkuna1t@gov.uk","gender":"Female","birthday":"2/10/2011"},
    {"first_name":"Livy","last_name":"Dunbar","email":"ldunbar1u@so-net.ne.jp","gender":"Female","birthday":"7/27/2000"},
    {"first_name":"Nico","last_name":"Zeal","email":"nzeal1v@shutterfly.com","gender":"Male","birthday":"4/16/2012"},
    {"first_name":"Thain","last_name":"Wilfinger","email":"twilfinger1w@csmonitor.com","gender":"Male","birthday":"7/13/2011"},
    {"first_name":"Michaelina","last_name":"Itzakovitz","email":"mitzakovitz1x@privacy.gov.au","gender":"Female","birthday":"1/1/2003"},
    {"first_name":"Regina","last_name":"Govini","email":"rgovini1y@skyrock.com","gender":"Female","birthday":"12/15/2001"},
    {"first_name":"Granny","last_name":"Clewarth","email":"gclewarth1z@uiuc.edu","gender":"Male","birthday":"4/28/1984"},
    {"first_name":"Maynord","last_name":"Syce","email":"msyce20@mac.com","gender":"Male","birthday":"4/14/1990"},
    {"first_name":"Lamont","last_name":"Bardell","email":"lbardell21@typepad.com","gender":"Male","birthday":"12/12/1991"},
    {"first_name":"Micky","last_name":"Huckerbe","email":"mhuckerbe22@princeton.edu","gender":"Female","birthday":"10/9/2013"},
    {"first_name":"Noe","last_name":"McDowall","email":"nmcdowall23@netvibes.com","gender":"Male","birthday":"8/14/1996"},
    {"first_name":"Shelby","last_name":"Tenbrug","email":"stenbrug24@diigo.com","gender":"Male","birthday":"12/2/1983"},
    {"first_name":"Pauline","last_name":"Satyford","email":"psatyford25@theatlantic.com","gender":"Female","birthday":"11/4/2001"},
    {"first_name":"Beckie","last_name":"Edinburough","email":"bedinburough26@mozilla.com","gender":"Female","birthday":"6/13/2013"},
    {"first_name":"Brandie","last_name":"Geraudel","email":"bgeraudel27@admin.ch","gender":"Female","birthday":"7/31/1997"},
    {"first_name":"Joshia","last_name":"Marini","email":"jmarini28@oakley.com","gender":"Male","birthday":"10/10/2003"},
    {"first_name":"Hallsy","last_name":"Labes","email":"hlabes29@clickbank.net","gender":"Male","birthday":"8/4/1982"},
    {"first_name":"Sara-ann","last_name":"Melia","email":"smelia2a@globo.com","gender":"Female","birthday":"3/7/2018"},
    {"first_name":"Auguste","last_name":"Levane","email":"alevane2b@unblog.fr","gender":"Female","birthday":"5/25/1980"},
    {"first_name":"Bink","last_name":"Dablin","email":"bdablin2c@hp.com","gender":"Male","birthday":"11/19/1994"},
    {"first_name":"Paulie","last_name":"Burkill","email":"pburkill2d@imdb.com","gender":"Female","birthday":"1/29/2002"},
    {"first_name":"Esma","last_name":"Ramsey","email":"eramsey2e@wikia.com","gender":"Female","birthday":"3/19/2011"},
    {"first_name":"Rosamond","last_name":"Harower","email":"rharower2f@de.vu","gender":"Female","birthday":"5/19/1992"},
    {"first_name":"Ileana","last_name":"Krebs","email":"ikrebs2g@technorati.com","gender":"Female","birthday":"4/2/1982"},
    {"first_name":"Bradney","last_name":"Hardern","email":"bhardern2h@pagesperso-orange.fr","gender":"Male","birthday":"9/5/1995"},
    {"first_name":"Taylor","last_name":"Woodcock","email":"twoodcock2i@wiley.com","gender":"Male","birthday":"6/27/1995"},
    {"first_name":"Rudyard","last_name":"Lamba","email":"rlamba2j@un.org","gender":"Male","birthday":"2/6/1989"},
    {"first_name":"Tobit","last_name":"Pogue","email":"tpogue2k@blogtalkradio.com","gender":"Male","birthday":"12/26/1998"},
    {"first_name":"Matilde","last_name":"Picopp","email":"mpicopp2l@posterous.com","gender":"Female","birthday":"2/4/2010"},
    {"first_name":"Ilaire","last_name":"Calken","email":"icalken2m@time.com","gender":"Male","birthday":"6/10/2014"},
    {"first_name":"Reuben","last_name":"Thebes","email":"rthebes2n@sourceforge.net","gender":"Male","birthday":"1/23/1998"},
    {"first_name":"Orland","last_name":"Koubek","email":"okoubek2o@jiathis.com","gender":"Male","birthday":"2/18/1998"},
    {"first_name":"Killie","last_name":"McIlmorow","email":"kmcilmorow2p@cdc.gov","gender":"Male","birthday":"7/8/2017"},
    {"first_name":"Blaire","last_name":"Harbin","email":"bharbin2q@sbwire.com","gender":"Female","birthday":"12/14/2012"},
    {"first_name":"Babb","last_name":"Baily","email":"bbaily2r@jalbum.net","gender":"Female","birthday":"4/23/1981"}
]

students

students.map(student => {
    student.birthday = new Date(student.birthday);
    return student;
})

// students

db.students.insertMany(students)

let teachers = [
    {"first_name":"Michal","last_name":"Ledger","email":"mledger0@harvard.edu","gender":"Female","birthday":"5/24/2011"},
    {"first_name":"Krystal","last_name":"Goadbie","email":"kgoadbie1@yandex.ru","gender":"Female","birthday":"6/28/1987"},
    {"first_name":"Bili","last_name":"Ridsdale","email":"bridsdale2@bizjournals.com","gender":"Female","birthday":"11/17/1992"},
    {"first_name":"Ula","last_name":"Belcham","email":"ubelcham3@aboutads.info","gender":"Female","birthday":"10/8/1980"},
    {"first_name":"Thorsten","last_name":"Kingsman","email":"tkingsman4@clickbank.net","gender":"Male","birthday":"4/22/2012"},
    {"first_name":"Bryan","last_name":"Stennett","email":"bstennett5@usgs.gov","gender":"Male","birthday":"1/25/1986"},
    {"first_name":"Charley","last_name":"Sallarie","email":"csallarie6@usnews.com","gender":"Male","birthday":"11/15/1981"},
    {"first_name":"Grady","last_name":"Robertelli","email":"grobertelli7@sourceforge.net","gender":"Male","birthday":"6/25/2017"},
    {"first_name":"Merrily","last_name":"McDermot","email":"mmcdermot8@latimes.com","gender":"Female","birthday":"1/3/1997"},
    {"first_name":"Mendie","last_name":"Sinclar","email":"msinclar9@businessinsider.com","gender":"Male","birthday":"12/12/2006"}
]

teachers
db.teachers.insertMany(teachers)

let subjects = [
    {"name": "SQL"},
    {"name": "NoSQL"},
    {"name": "JavaScript"},
    {"name": "NODE.JS"},
    {"name": "GIT"},
    {"name": ".NET"},
    {"name": "HTML"},
    {"name": "CSS3"},
    {"name": "PHP"},
    {"name": "Python"}
]

subjects
db.subjects.insertMany(subjects)

db.students.find({})

db.students.find({}).limit(3)

db.students.find({}).limit(3).pretty()

db.students.find({}).limit(3).sort({birthday:-1}).pretty()

db.students.find({}).sort({birthday:-1}).limit(3).pretty()

db.students.find({first_name: "Wilmar"}).pretty()

db.students.find({
    $or:[
        {first_name: "Wilmar"},
        {first_name: "Aretha"}
        ]
}).pretty()

var cursor = db.students.find({
    $or:[
        {first_name: "Wilmar"},
        {first_name: "Aretha"}
        ]
})
while(cursor.hasNext()) {
    printjson(cursor.next())
}

var cursor = db.students.find({
    $or:[
        {first_name: "Wilmar"},
        {first_name: "Aretha"}
        ]
})

while(cursor.hasNext()) {
    var student = cursor.next()
    printjson(student)
}

var cursor = db.students.find({
    $or:[
        {first_name: "Wilmar"},
        {first_name: "Aretha"}
        ]
})

while(cursor.hasNext()) {
    var student = cursor.next()
    printjson(student.birthday)
}

var cursor = db.students.find({
    $or:[
        {first_name: "Wilmar"},
        {first_name: "Aretha"}
        ]
})

while(cursor.hasNext()) {
    var student = cursor.next()
    var birthday = new Date(student.birthday)
    student.birthday = birthday.getFullYear() + '-' + birthday.getMonth() + '-' + birthday.getDate()
    printjson(student)
}

var cursor = db.students.find({
    $or:[
        {first_name: "Wilmar"},
        {first_name: "Aretha"}
        ]
})

while(cursor.hasNext()) {
    var student = cursor.next()
    var birthday = new Date(student.birthday)
    student.birthday = birthday.getFullYear() + '-' + (birthday.getMonth()+1) + '-' + birthday.getDate()
    printjson(student)
}

var cursor = db.students.find({
    $or:[
        {first_name: "Wilmar"},
        {first_name: "Aretha"}
        ]
}).sort({birthday:-1})

while(cursor.hasNext()) {
    var student = cursor.next();
    var birthday = new Date(student.birthday);
    student.birthday = birthday.getFullYear() + '-' + (birthday.getMonth()+1) + '-' + birthday.getDate();
    printjson(student);
}

var cursor = db.students.find()
while(cursor.hasNext()) {
    var student = cursor.next();
    print(new Date(student.birthday));
}

db.students.find( {
    $and : [
        { $or : [ {first_name: "Wilmar"}, {first_name: "Aretha"}] },
        { gender : "Male" }
    ]
} );

db.students.find( {
    $and : [
        { $or : [ {first_name: "Wilmar"}, {first_name: "Aretha"}] },
        { $or : [ { gender : "Male" } ] }
    ]
} );

db.students.find({
    gender: {$not: {$eq: "Male"}}
})

db.students.find({
    $nor: [ { first_name: "Wilmar" }, { gender: "Male" } ]
})

db.students.find({
    first_name: {
        $exists: true,
        $nin: [ "Wilmar", "Aretha" ]
    }
})

db.students.stats()

db.students.stats().count

var cursor = db.students.find({
        birthday: {
            $gt: new Date('1980-01-01'),
            $lt: new Date('1990-01-01')
        }
})
cursor.length()

db.students.update(
    {'first_name':'Wilmar'},
    {$set:{'Address':'Enhavevej 81C, 4. th.'}},
    {multi:true}
    )

db.students.find({first_name: "Wilmar"})

db.students.remove({first_name:'Aretha'})

db.students.find({first_name: "Aretha"})

db.students.remove({})

db.students.find()

db.students.insertMany(students)