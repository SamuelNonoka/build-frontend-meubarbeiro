(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5705bbca"],{"450a":function(e,a,o){"use strict";var s=o("8c5e"),i=o.n(s);i.a},"4e15":function(e,a,o){"use strict";var s=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app-breadcrumb"},[o("v-breadcrumbs",{staticClass:"px-0 py-0",attrs:{items:e.items,large:""},scopedSlots:e._u([{key:"divider",fn:function(){return[o("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)},i=[],r=(o("95d4"),{name:"Breadcrumb",props:{items:{default:Array}}}),t=r,d=o("2877"),n=o("6544"),l=o.n(n),c=(o("a4d3"),o("4de4"),o("4160"),o("a15b"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("2fa7")),u=(o("abd3"),o("1c87")),m=o("58df");function p(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,s)}return o}function v(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?p(o,!0).forEach((function(a){Object(c["a"])(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(o).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}var f=Object(m["a"])(u["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(c["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var a=this.generateRouteLink(),o=a.tag,s=a.data;return e("li",[e(o,v({},s,{attrs:v({},s.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),b=o("80d2"),_=Object(b["i"])("v-breadcrumbs__divider","li"),g=o("7560");function h(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,s)}return o}function P(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?h(o,!0).forEach((function(a){Object(c["a"])(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(o).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}var O=Object(m["a"])(g["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return P({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(_,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],a=!!this.$scopedSlots.item,o=[],s=0;s<this.items.length;s++){var i=this.items[s];o.push(i.text),a?e.push(this.$scopedSlots.item({item:i})):e.push(this.$createElement(f,{key:o.join("."),props:i},[i.text])),s<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var a=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},a)}}),q=o("132d"),C=Object(d["a"])(t,s,i,!1,null,null,null);a["a"]=C.exports;l()(C,{VBreadcrumbs:O,VIcon:q["a"]})},"8c5e":function(e,a,o){},"95d4":function(e,a,o){},abd3:function(e,a,o){},d2a6:function(e,a,o){"use strict";var s=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"terms py-4"},[o("breadcrumb",{attrs:{items:e.breadcrumb}}),o("h1",{staticClass:"mt-4 mb-0"},[e._v(e._s(e.titulo))]),o("p",{staticClass:"mt-0"},[e._v("Última atualização: "+e._s(e.dataUltimaAtualizacao))]),o("div",{staticClass:"my-8"},[e._t("default")],2),o("p",[o("strong",[e._v("Última atualização: "+e._s(e.dataUltimaAtualizacao))])])],1)},i=[],r=o("4e15"),t={name:"Terms",props:{breadcrumb:{required:!0},dataUltimaAtualizacao:{required:!0},titulo:{required:!0}},components:{Breadcrumb:r["a"]}},d=t,n=(o("450a"),o("2877")),l=Object(n["a"])(d,s,i,!1,null,"173e3f96",null);a["a"]=l.exports},df9f:function(e,a,o){"use strict";o.r(a);var s=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("terms-template",{staticClass:"privacy-policy",attrs:{breadcrumb:e.breadcrumb,dataUltimaAtualizacao:"19/03/2021",titulo:"Política de Privacidade"}},[o("p",[e._v(" A plataforma Meu Barbeiro, vem, por intermédio desta Política de Privacidade, apresentar aos Usuários as condições e as informações essenciais sobre a forma que seus dados serão utilizados e tratados. ")]),o("p",[e._v(" Essa Política de Privacidade é parte integrada dos "),o("router-link",{attrs:{to:{name:"site-terms"}}},[e._v("Termos de Uso")])],1),o("p",[e._v(" A coleta, o uso e o compartilhamento dos dados pessoais dos Usuários ficrão sujeitos a esta Política de Privacidade e suas atualizações. Ao acessar a plataforma, o Usuário deverá ler a presente Política, manifestando sua concordância com relação às suas disposições, por meio dp botão disponibilizado. Por meio de tal ato, o Usuário demonstra sua aceitação livre, expressa e informada, sem quasquer reservas, acerca de todo conteúdo deste documento. ")]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Apresentação, Coleta, Utilização e Guarda dos Dados Coletados")]),o("ol",[o("li",[e._v(" O Meu Barbeiro toma as medidas que estão ao seu alcance para proteger a privacidade dos Usuários, em atendimento à legislação em vigor. Esta Política de Privacidade detalha as formas de coleta, guarda, utilização, compartilhamento e divulgação dos dados e informações e dados pessoais dos Usuários, bem como aponta claramente as medidas tomadas para assegurar a proteção dos dados coletados. ")]),o("li",[e._v(" Os dados são coletados quando inseridos ou submetidos voluntariamente pelos Usuários ao utilizar a Plataforma, depois do usuário fornecer o seu consentimento para tanto. ")]),o("li",[e._v(" As informações que a Meu Barbeiro coleta são: "),o("ol",[o("li",[e._v("Nome")]),o("li",[e._v("Endereço de e-mail")]),o("li",[e._v("Telefone")]),o("li",[e._v("Foto")]),o("li",[e._v("Endereço")]),o("li",[e._v("Informações de cadastros da barbearia")]),o("li",[e._v("Agendamentos e Serviços realizados na plataforma")])])]),o("li",[e._v(" A Meu Barbeiro não é responsável pela veracidade ou falta dela nas informações prestadas pelo Usuário, bem como pela sua desatualização, quando é de sua responsabilidade prestá-las com exatidão ou atualizá-las. ")]),o("li",[e._v(" Os dados dos Usuários são coletados no momento de cadastro e/ou respectivas atualizações. Depois de realizado o cadastro, os dados dos Usuários são armazenados no banco de dados da Meu Barbeiro. ")]),o("li",[e._v(" Os dados dos Usuários podem ser armazenados para as seguintes finalidades: "),o("ol",[o("li",[e._v("Identificá-los adequadamente na Plataforma")]),o("li",[e._v(" Administrar, prestar os serviços e cumprir as obrigações decorrentes do uso de nossos serviços ")]),o("li",[e._v(" Atender adequadamente às solicitações e dúvidas ")]),o("li",[e._v("Manter atualizados seus cadastros para fins de contatos da Meu Barbeiro")]),o("li",[e._v("Aperfeiçoar o uso e experiência de navegação das nossas plataformas")]),o("li",[e._v("Efetuar estatísticas, estudos, pesquisas e levantamentos pertinentes às atividades de seus comportamentos ao utilizarem a plataforma")]),o("li",[e._v("Promover os nossos serviços e produtos, informar sobre novidades, funcionalidades, conteúdos, notícias e demais eventos relevantes para a manutenção do relacionamento com os Usuários")]),o("li",[e._v("Nos resguardar de direitos e obrigações relacionadas ao uso da nossa plataforma")]),o("li",[e._v("Coletar e analisar dados anônimos a partir de dados de terceiros sem restrições para parametrização e criação de métricas")])])])])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Compartilhamento e Divulgação de Dados")]),o("ol",[o("li",[e._v(" O uso, acesso e compartilhamento dos dados coletados pela Meu Barbeiro, quando necessários, serão feitos dentro dos limites e propósitos dos negócios da Meu Barbeiro, podendo ser disponibilizada para consulta e cedidas aos nossos parceiros de negócios comerciais, fornecedores e autoridades, desde que obedecido ao disposto na presente Política de Privacidade ")]),o("li",[e._v(" Sempre que houver o compartilhamento e cesão de dados coletados, as mesmas garantias e cuidados que a Meu Barbeiro possui com os dados dos Usuários serão replicados para os destinatários, de modo a seguir o mesmo padrão de proteção de dados pessoais descritos na presente Política de Privacidade ")]),o("li",[e._v(" Os dados fornecidos pelo Usuário aos parceiros serão de responsabilidade destes, estando assim sujeitos às suas próprias práticas de coleta de uso de dados, sem que caiba qualquer ônus à Meu Barbeiro pelo tratamento de tais informações ")])])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Atividades em nossa Plataforma")]),o("ol",[o("li",[e._v(" Podemos registrar as atividades realizadas pelo Usuário na nossa Plataforma, criando, quando possível e aplicável, por meio de logs que conterão: "),o("ol",[o("li",[e._v("Endereço IP do Usuário")]),o("li",[e._v("Acesso e ações realizadas pelo Usuário na Plataforma")]),o("li",[e._v("Páginas e telas acessadas pelo Usuário na Plataforma")]),o("li",[e._v("Datas e horários de cada ação do Usuário na Plataforma, além do acesso que fizer às páginas e telas das ferramentas e funcionalidades que utilizar")]),o("li",[e._v("Informações sobre o dispositivo utilizado pelo Usuário, como: versão de sistema operacional, localização do dispositivo, navegador, dentre outros aplicativos e softwares instalados")]),o("li",[e._v("Session e UserID, quando disponível")])])]),o("li",[e._v(" Podemos utilizar outras tecnologias para coletar os dados de navegação de nossos Usuários, o que inclui, mas não se limita a cookies e recursos em Javascript. No entanto, tais tecnologias respeitarão sempre os termos desta Política de Privacidade e as opções de nosso Usuário referente ao tratamento de dados. ")])])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Segurança")]),o("ol",[o("li",[e._v("Internamente, os dados dos Usuários são acessados somente por profissionais devidamente autorizados e capacitados, respeitando os princípios de confiabilidade e preservação da privacidade nos termos desta Política de Privacidade")]),o("li",[e._v("A Meu Barbeiro recomenda que o usuário mantenha sua senha sob total sigilo, evitando a sua divulgação a terceiros. Nunca solicitaremos ao Usuário que nos informe sua senha.")])])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Dos Direitos dos Titulares de Dados")]),o("ol",[o("li",[o("strong",[e._v("Direitos ARCO:")]),e._v(" O Usuário poderá exercer os seus direitos conhecido como ARCO (Acesso, Retificação, Cancelamento, Oposição). Apenas os dados identificáveis são passiveis do exercício de tais direitos: ")]),o("li",[e._v(" Os direitos ARCO do Usuário compreendem: "),o("ol",[o("li",[e._v(" Direitos de Acesso: permite que o Usuário conheça e obtenha informações sobre os dados pessoais sujeitos a processamento; ")]),o("li",[e._v(" Direito de retificação ou exclusão: permite a correção de erros e a modificação de dados imprecisos e incompletos; ")]),o("li",[e._v("Direito de cancelamento: permite a exclusão de dados inadequados ou excessivos;")]),o("li",[e._v("Direito de oposição: direito do Usuário de impedir o tratamento dos seus dados pessoais ou de cessar o processamento em curso;")]),o("li",[e._v("Direito de restringir o processamento: envolve a marcação de dados pessoais armazenados para restringir seu tratamento futuro;")]),o("li",[e._v("Portabilidade de dados: fornecimento de dados do Usuário que estiver sujeito a processamento para que possa ser transferida para outro controlador sem impedimentos;")]),o("li",[e._v("Direito de retirar o consentimento dado a qualquer momento.")])])]),o("li",[e._v(" A Meu Barbeiro reserva-se o direito de usar de todos os meios lícitos necessários para aferir a identidade daqueles que solicitam o exercício dos direitos ARCO de modo a comprovar tratar-se, de fato, dos respectivos titulares de dados. ")])])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Revogação do consentimento:")]),o("p",[e._v("O Usuário que desejar revogar o seu consentimento procederá mediante pedido de revogação do consentimento, conforme disposto na legislação brasileira.")]),o("p",[e._v("Diante dessa situação, a Meu Barbeiro empregará os melhores esforços para responder a todos os pedidos legítimos de revogação do consentimento, agindo para isso no prazo de até 30 (trnta) dias. Ocasionalmente, pode demorar mais de 60 (sessenta) dias corridos, caso a solicitação seja particularmente complexa ou caso o Usuário tenha feito várias solicitações. Caso demore mais do que o previsto, iremos notificá-lo.")])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Retenção e Exclusão de Dados Pessoais")]),o("ol",[o("li",[e._v("A Meu Barbeiro segue os padrões de segurança comumente utilizados e emprega os seus melhores esforços para garantir a segurança de seus Usuários e respeitar e proteger as informações pessoais desses contra a perda, roubo ou demais modalidades de uso indevido e acesso não autorizado. Todavia, considerando que nenhum sistema de informação é infalível, a Meu Barbeiro se exime de quaisquer responsabilidades por eventuais danos e/ou prejuízos decorrentes de falhas, vírus ou invasões do banco de dados e/ou prejuízos decorrentes de falhas, vírus ou invasões do banco de dados da Meu Barbeiro.")]),o("li",[e._v("Os dados obtidos dos Usuários podem ser armazenados em nossos servidores próprios ou de terceiro contratado para esse fim, alocados no Brasil e/ou em outro país, podendo ainda ser armazenados por meios de tecnologia de cloud computing e/ou outras que surjam futuramente, visando sempre a melhoria e aperfeiçoamento das nossas atividades.")]),o("li",[e._v("O Usuário pode solicitar a exibição, retificação ou ratificação de seus dados pessoais, por meio das ferramentas de atendimento disponibilizadas pela Meu Barbeiro. Caso deseje solicitar a exclusão de seus dados pessoais coletados, poderá, ainda, entrar em contato através do e-mail contato@appmeubarbeiro.com.br")]),o("li",[e._v("Nosso Cliente pode solicitar a exclusão de seus dados pessoais coletados e registrados pela Meu Barbeiro. Para solicitar a exclusão dos dados pessoais basta entrar em contato através do seguinte e-mail: contato@appmeubarbeiro.com.br")])])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Alterações")]),o("ol",[o("li",[e._v("Podemos alterar o teor desta Política de Privacidade a qualquer momento, conforme a finalidade ou necessidade, tal qual para adequação e conformidade legal de disposição de lei ou norma que tenha força política equivalente, cabendo ao nosso Cliente verificá-la sempre efetuar o acesso à Plataforma da Meu Barbeiro.")])])]),o("li",{staticClass:"section"},[o("span",{staticClass:"titulo"},[e._v("Definições")]),o("p",[e._v("Para os fins deste documento, devem se considerar as seguintes definições e descrições para seu melhor atendimento:")]),o("p",[o("strong",[e._v("Cloud Computing:")]),e._v(" Ou computação em nuvem, é tecnologia de virtualização e serviços construída a partir da interligação de mais de um servidor por meio de uma rede de informação comum, com objetivo de reduzir custos e aumentar a disponibilidade dos serviços sustentados.")]),o("p",[o("strong",[e._v("Conteúdo: ")]),e._v("todo e qualquer texto, gráficos, imagens, música, áudio, vídeo, informação ou outros materiais disponibilizados na Plataforma, independentemente de ser conteúdo do Usuário ou da Meu Barbeiro.")]),o("p",[o("strong",[e._v("Conteúdo de Usuário: ")]),e._v("todo e qualquer conteúdo que um Usuário postar, transferir, publicar, apresentar ou trasmitir para ser disponibilizado através da plataforma.")]),o("p",[o("strong",[e._v("Link: ")]),e._v("Terminologia para endereço de Internet.")]),o("p",[o("strong",[e._v("Plataforma: ")]),e._v("Designa a Plataforma e quaisquer outros sites, aplicativos móveis ou canais de atendimento oferecidos pela Meu Barbeiro.")]),o("p",[o("strong",[e._v("Usuários: ")]),e._v("pessoa física, plenamente capaz de acordo com o Código Civil, apta a contratar serviços por meio da Plataforma.")])]),o("p",[e._v("O Usuário declara ter lido, entendido e aceitado todas as regras, condições e obrigações estabelecidas no presente Termos.")])])},i=[],r=o("d2a6"),t={name:"PrivacyPolicy",components:{TermsTemplate:r["a"]},data:function(){return{breadcrumb:[{text:"Home",disabled:!1,href:"/"},{text:"Política de Privacidade",disabled:!0}]}}},d=t,n=o("2877"),l=Object(n["a"])(d,s,i,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5705bbca.082a1ef1.js.map