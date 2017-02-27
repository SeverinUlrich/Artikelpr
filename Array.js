<script>
	'use strict';
	var Artikel = new Array();

			Artikel[0] = new Object();
			Artikel[0]["Name"] = "Porsche 911";
			Artikel[0]["Anzahl"] = 5;
			Artikel[0]["EAN"] = 1324567891234;
			Artikel[0]["UVP"] = 199000;

			Artikel[1] = new Object();
			Artikel[1]["Name"] = "Müllermilch";
			Artikel[1]["Anzahl"] =498;
			Artikel[1]["EAN"] = 4567345031245;
			Artikel[1]["UVP"] = 4.99;

			Artikel[2] = new Object();
			Artikel[2]["Name"] = "Hundefutter";
			Artikel[2]["Anzahl"] = 33;
			Artikel[2]["EAN"] = 8945832142567;
			Artikel[2]["UVP"] = 9.99;


	function init() {
		var elem = document.getElementById('button');
		elem.addEventListener('click', ausgeben);
	}

		function ausgeben() {
			var container = document.getElementById("ausgabe"),
				dl;

			if (container) {

				dl = container.appendChild(
					document.createElement("dl")
				);

				Artikel.forEach(function (m, i) {

					var dd, dt, eigenschaft;

					dt = document.createElement("dt");
					dt.innerHTML = "Artikel " + (i+1);

					dl.appendChild(dt);

					for (eigenschaft in m) {

						dd = document.createElement("dd");
						dd.innerHTML = eigenschaft + ": " + m[eigenschaft];

						dl.appendChild(dd);
					}
				});
			}
		}

	document.addEventListener('DOMContentLoaded', init);
	</script>

</div>
</p>
<div id="ausgabe"></div></p>
</div>
