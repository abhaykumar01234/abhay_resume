import { Dialog } from "~/components/Dialog";

export const DialogExample = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, maxime
        dolores nobis voluptatibus iure nemo quisquam repellendus dignissimos
        aliquam dicta optio tempora repellat, accusamus deleniti sit, enim
        praesentium! Quas neque deserunt necessitatibus incidunt omnis itaque
        repudiandae est ratione alias eum optio commodi, amet ipsam vel
        obcaecati enim assumenda consequatur laborum.
      </p>
      <br />
      <div className="inline">
        <Dialog.Root>
          <Dialog.Trigger className="primary">Open</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>Header</Dialog.Header>
            <Dialog.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              porro.
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close className="primary">Close</Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger className="primary">Open2</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header withClose={false}>Header 2</Dialog.Header>
            <Dialog.Body>This is a second dialog</Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close className="primary">Close</Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger className="primary">Open Form</Dialog.Trigger>
          <Dialog.Content>
            <form method="dialog">
              <Dialog.Header>
                <strong>Application Form</strong>
              </Dialog.Header>
              <Dialog.Body className="stack">
                <div className="field stack g0">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field stack g0">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="field stack g0">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />
                </div>
              </Dialog.Body>
              <Dialog.Footer className="inline">
                <Dialog.Close>Close</Dialog.Close>
                <button type="submit" className="primary">
                  Submit
                </button>
              </Dialog.Footer>
            </form>
          </Dialog.Content>
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger className="primary">Large Form Open</Dialog.Trigger>

          <Dialog.Content className="large">
            <form method="dialog" className="dialogWrapper">
              <Dialog.Header>Large Modal Text</Dialog.Header>
              <Dialog.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam voluptate odit, provident inventore unde numquam dolore
                  explicabo iste fugit ut. Hic dolor non sed velit voluptas cum
                  repudiandae in, magnam quaerat sequi incidunt consectetur
                  deleniti saepe, necessitatibus labore aliquam maxime similique
                  atque aut earum temporibus architecto? Saepe consequuntur
                  ullam aut?
                </p>
                <p>
                  Illum sint iure pariatur incidunt voluptatibus. Illum mollitia
                  quam repellat officia nobis impedit, tempora quod rerum.
                  Perferendis doloremque a sunt vitae omnis quia quam, pariatur
                  sit tempore dolorem ratione molestiae rerum vero aliquam
                  aspernatur itaque iusto, praesentium ullam error labore nulla
                  totam? Illo excepturi deleniti eaque eveniet aut porro vel!
                </p>
                <p>
                  Ea, delectus! Magnam minus recusandae asperiores culpa eius
                  facilis, cumque libero quas aut repellendus repudiandae dicta
                  similique totam, sint at unde animi cupiditate ea natus
                  labore? Fugiat in ipsa molestiae odio eum placeat, nulla quos.
                  Voluptates molestiae temporibus exercitationem voluptas
                  dolorem? Odio obcaecati qui accusantium necessitatibus ducimus
                  dolorum pariatur commodi!
                </p>
                <p>
                  Aspernatur tenetur nihil minus iure dolorum, quaerat
                  necessitatibus expedita corrupti maxime adipisci quod,
                  architecto optio. Voluptas magnam vel suscipit eius velit
                  accusamus, atque et optio magni mollitia, officia voluptate
                  quasi, repellendus dolorem ex ipsum animi nisi deleniti
                  temporibus sunt earum nemo aperiam vero tempore. Dolores
                  recusandae fugiat placeat voluptatibus iste.
                </p>
                <p>
                  Autem iure quod cum mollitia, facilis sit beatae ut odio ullam
                  dolores, est repudiandae quae eveniet quos pariatur
                  consequatur voluptatibus. Quae, nostrum. Accusamus eveniet est
                  iusto! Quibusdam cupiditate vitae id dolorem perspiciatis
                  illum similique ex doloribus distinctio commodi, soluta
                  delectus alias a fuga reprehenderit quaerat nihil voluptatibus
                  ducimus. Sunt, a.
                </p>
                <p>
                  Nesciunt praesentium, blanditiis adipisci, dignissimos
                  voluptas facilis illo nulla fugit asperiores dolores, officiis
                  tempora! Doloribus dolore tenetur quia est qui harum, minus,
                  sequi quidem vero nam molestias consequatur, doloremque
                  deleniti at exercitationem! Amet quia cum expedita dicta,
                  repellat incidunt doloribus animi facere illo, in quam, vero
                  enim adipisci reiciendis aut.
                </p>
                <p>
                  Assumenda repellendus, incidunt quia ducimus provident iure
                  repudiandae ipsa, tempore vitae iusto rem perspiciatis, unde
                  optio eligendi. Neque amet, quos pariatur minima sed totam
                  impedit iste numquam vero rem repellendus dolore officia error
                  vel, odit repudiandae! Hic earum, porro dignissimos, id,
                  molestias optio officiis nisi quo voluptate fuga sit. Quae!
                </p>
                <p>
                  Ut quis veritatis, consequuntur, enim quae, nemo repellendus
                  sunt molestias excepturi itaque accusamus quod dolore?
                  Quibusdam, alias voluptatibus sequi pariatur, vel a molestiae,
                  quam veniam quod tempora aliquid aut reprehenderit tenetur
                  debitis temporibus doloribus autem hic voluptate eligendi
                  repellat beatae! Fugit asperiores fuga maxime perspiciatis,
                  quis nobis expedita nemo quas.
                </p>
                <p>
                  Accusamus, illum qui. Quis voluptatem, corrupti, consequatur
                  provident quos aspernatur, eum ipsam porro recusandae esse
                  optio! Earum minus iusto ea delectus beatae eius explicabo.
                  Earum, similique tempore fuga aperiam architecto nisi
                  consequuntur quod ex accusantium iste atque laudantium et
                  voluptatum facilis autem alias inventore repudiandae
                  repellendus cum, sint corporis repellat?
                </p>
                <p>
                  Molestiae ea, iste distinctio veritatis minima ducimus quos
                  exercitationem praesentium blanditiis modi omnis unde et,
                  ullam rem voluptate! Unde quam necessitatibus consequatur
                  dolore, officia expedita, ipsa iusto velit et, aut optio
                  commodi modi. Laborum, eum minus qui incidunt quas facere ipsa
                  assumenda? Nisi repellendus sint consequuntur nobis accusamus.
                  Reiciendis, necessitatibus!
                </p>
                <p>
                  Nobis excepturi voluptatem natus perspiciatis, omnis tempora
                  rerum maxime ullam dolore atque, minus, iusto quaerat debitis
                  ex? Quos eligendi tempore nemo necessitatibus a sapiente
                  consectetur magni aspernatur provident quidem quis voluptatem
                  animi et, ullam voluptates ipsa, aliquid architecto officia
                  temporibus reiciendis explicabo obcaecati minima. Velit
                  adipisci maiores eos quia. Doloremque!
                </p>
                <p>
                  Doloribus maxime placeat repellendus ut eum natus fugit
                  incidunt beatae? Placeat, sunt! Aspernatur, excepturi.
                  Architecto quisquam dignissimos quibusdam quos. Necessitatibus
                  harum impedit adipisci id cupiditate similique! Illo soluta
                  reprehenderit ex harum tenetur tempora dolore odio expedita.
                  Voluptatem vitae aut dolorem recusandae nulla tempora, quia
                  impedit repellendus culpa hic consectetur ad!
                </p>
                <p>
                  In voluptate commodi officiis quasi accusantium, reprehenderit
                  libero exercitationem neque facilis non explicabo, consectetur
                  eaque! Nam, eveniet! Architecto totam, modi asperiores est vel
                  officia saepe commodi. Dolorem ab nihil, repellendus libero
                  impedit quisquam et explicabo molestiae facilis odio ratione
                  perferendis qui nam fugit atque a quod, ducimus aut
                  accusantium? Iste.
                </p>
                <p>
                  Aliquid culpa deleniti dolores ex eius cumque, quidem
                  delectus. Ipsum cum necessitatibus praesentium libero
                  recusandae quo culpa quam veniam vel iure rerum ea illo
                  eveniet, delectus dicta quibusdam cupiditate iusto commodi
                  laboriosam. Suscipit facilis incidunt expedita unde excepturi
                  deserunt, illum itaque nemo ipsa enim, odit dignissimos
                  accusantium, doloremque similique! Totam?
                </p>
                <p>
                  Nobis est autem voluptate, accusamus alias doloribus
                  architecto quasi temporibus inventore, sunt veniam quod
                  quaerat sed tempora. Quas sunt quia enim provident, pariatur
                  veniam impedit delectus non voluptas, voluptatum consectetur
                  repellat doloribus, assumenda tempora ea officiis voluptatem
                  officia voluptate facilis! Voluptate, nam sint quaerat aliquam
                  incidunt maiores cupiditate enim optio.
                </p>
                <p>
                  Commodi incidunt harum numquam modi dolores sapiente
                  reprehenderit libero, alias ipsa tempora cum tenetur excepturi
                  voluptatibus doloremque vel asperiores voluptatum in rem quo
                  aut ratione. Totam nemo, fugit officia incidunt laboriosam
                  repellat, et odit numquam ex sint neque molestiae nisi quia
                  repellendus consequuntur consectetur dolor maxime voluptas non
                  dolores accusantium!
                </p>
                <p>
                  Alias quod perspiciatis assumenda maxime quae modi iure et
                  magni veniam necessitatibus qui voluptatem fugiat aliquam,
                  quasi culpa architecto itaque nemo natus ducimus repellat
                  commodi eius ipsa delectus harum. Impedit molestiae deserunt
                  corrupti provident ex dicta aut labore cumque voluptatum!
                  Nihil, vero! Voluptatibus aliquam optio neque eius explicabo
                  odit vel!
                </p>
                <p>
                  Accusamus aperiam cupiditate inventore earum a veritatis sint
                  doloribus nostrum atque incidunt quas, amet ipsam saepe
                  exercitationem eveniet itaque eligendi quae? Sequi, cum eos
                  labore quis culpa alias dolorem quo molestiae perferendis
                  debitis cupiditate iure fuga aut consequuntur consectetur
                  ipsum distinctio nisi illum rem optio neque! Eveniet
                  consectetur enim iste.
                </p>
                <p>
                  Quis quod atque enim totam qui quas nihil unde eveniet fugiat
                  sapiente quam eaque sunt dolores accusantium vero magnam odio
                  aspernatur blanditiis quisquam, nesciunt mollitia ut. Quo
                  voluptatum a laboriosam quia, placeat, explicabo voluptates
                  dicta veritatis veniam commodi deserunt iure earum sit ad
                  saepe ea similique sapiente harum fugit facere.
                </p>
                <p>
                  Obcaecati saepe voluptate vitae, reiciendis quo enim
                  recusandae consequuntur debitis ut eum in nihil perferendis
                  dicta dolorum eligendi quod tenetur eos omnis iste id sunt
                  minus et ratione officiis. Minus ullam cupiditate dolor.
                  Laudantium a cum aliquam, nulla debitis qui maiores mollitia
                  impedit recusandae, nesciunt aspernatur rem molestias placeat
                  commodi.
                </p>
                <p>
                  Ipsa possimus rem vero tempore explicabo beatae quos
                  perferendis ab magnam officiis esse consectetur ad, neque
                  autem, ex quo ipsam totam distinctio enim aliquid temporibus?
                  Ipsum excepturi fugiat natus rerum, enim quo a quis totam.
                  Nobis laudantium, totam nam ex aliquid iure dolor non tenetur?
                  Dicta ad exercitationem natus. Ullam?
                </p>
                <p>
                  Voluptatem asperiores a esse. Maiores amet eum laudantium
                  molestiae labore ipsam culpa similique numquam magni ullam
                  nulla ex et, placeat, ea id quod aut ipsum officiis velit sit?
                  Aperiam maxime ipsum at ipsa accusantium, excepturi saepe
                  deleniti laborum natus itaque dolor quisquam reprehenderit
                  repellat quasi minus accusamus odio cumque! Sequi.
                </p>
                <p>
                  Quia perspiciatis temporibus repudiandae vel. Nihil beatae
                  ratione dolore, voluptate labore sunt. Quod est sapiente
                  voluptates labore itaque deleniti ad quo vitae at atque minima
                  ullam omnis, nemo nulla iste voluptatum ipsum saepe nobis
                  odit. Commodi non quaerat cum quod pariatur incidunt animi
                  excepturi ab, nemo doloremque numquam sunt quam?
                </p>
                <p>
                  Voluptatem recusandae expedita quibusdam, possimus distinctio
                  sunt minus molestias eligendi accusamus assumenda vitae.
                  Iusto, odit earum rem enim eligendi autem architecto aperiam
                  quia aut labore quod aspernatur voluptas! Saepe, explicabo
                  architecto molestiae eos voluptatum ut perferendis est quam
                  dolorum in aliquam eveniet quidem dolores praesentium? Natus,
                  sed. Laborum, tempora doloremque!
                </p>
                <p>
                  Maxime earum excepturi sapiente laborum minus tempora animi
                  incidunt sit aliquid? Quae quo architecto nulla libero quas,
                  incidunt adipisci dolore, cupiditate culpa corrupti fugiat
                  quis natus similique saepe magni aspernatur sed obcaecati
                  voluptate in iure corporis. Beatae maiores rerum alias totam
                  explicabo quo accusamus repudiandae sit praesentium doloribus?
                  Nobis, temporibus.
                </p>
                <p>
                  Nobis dolores doloremque eos, suscipit laudantium modi sequi
                  quo, quod temporibus debitis doloribus adipisci voluptates id
                  aperiam dolor assumenda? Commodi officiis maiores eveniet cum
                  facilis id quasi, ullam saepe totam voluptates error, et quas
                  qui nostrum ut. Impedit laboriosam omnis corporis, dolores
                  veniam, blanditiis dignissimos deleniti sapiente, nesciunt
                  odit dolorem!
                </p>
                <p>
                  Accusamus nam voluptatem quasi possimus sint totam
                  necessitatibus deleniti! Aliquam amet expedita praesentium
                  aperiam nam repellat, ullam ad maiores, quos sunt mollitia.
                  Possimus ducimus voluptatibus quod! Quia aspernatur numquam
                  dicta! Qui ex illo maiores id necessitatibus corporis
                  doloremque in tempora voluptates magni, molestiae officia
                  excepturi, sequi distinctio nobis iure delectus.
                </p>
                <p>
                  Non velit nisi eum excepturi assumenda repudiandae ab, cum
                  aspernatur. Nam, eligendi debitis tempore minus omnis
                  temporibus, et similique ullam eum quae quas. Aliquam, quo?
                  Dolore inventore modi quidem temporibus. Neque unde aut, porro
                  ex quod deserunt. Cupiditate a aliquid odio obcaecati. Magni
                  minus odio ea incidunt fugit, soluta pariatur.
                </p>
                <p>
                  Corrupti blanditiis natus dolores, officiis veniam molestias
                  nam ex odit soluta autem sit eligendi dignissimos excepturi
                  vitae illum? Quibusdam atque sequi cumque natus. Deleniti vel
                  omnis eaque dicta maxime animi, laboriosam officiis est
                  voluptas sapiente rem quia, magnam laudantium ipsa et officia
                  deserunt fugiat voluptatem similique. Perferendis eaque
                  commodi nemo?
                </p>
                <p>
                  Tempora possimus autem deleniti molestiae laudantium, ad
                  praesentium aliquid veritatis dolor quam eligendi sapiente
                  deserunt assumenda mollitia aut nam placeat voluptatibus atque
                  sit illum omnis? Deserunt expedita officiis, eum suscipit
                  exercitationem nisi ratione labore nulla nihil fugit nam quis
                  veritatis delectus, inventore debitis perspiciatis corrupti
                  magnam omnis cum laboriosam ipsum.
                </p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Close className="primary">Close</Dialog.Close>
              </Dialog.Footer>
            </form>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  );
};
