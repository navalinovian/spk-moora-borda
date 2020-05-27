import "./App.css";
import React, { Component } from "react";

import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      nilaiHasil: [],
      rankHasil: [],
      data: [],
      dataBorda: [],
      poinBorda: [],
      nilaiBorda: [],
      rankBorda: [],
      totalPoinBorda: 0,
    };
  }

  componentDidMount() {
    const kriteria = [
      { nama: "Kejelasan Materi", isBenefit: true, bobot: 0.2877155172 },
      { nama: "Jumlah Konten", isBenefit: true, bobot: 0.2920258621 },
      { nama: "Durasi", isBenefit: true, bobot: 0.2262931034 },
      { nama: "Views", isBenefit: true, bobot: 0.1939655172 },
    ];
    const data = [
      [
        [7, 3, 8, 9],
        [7, 3, 9, 1],
        [7, 1, 5, 1],
        [9, 9, 3, 3],
      ],
      [
        [7, 3, 7, 9],
        [8, 3, 6, 1],
        [8, 1, 7, 1],
        [5, 9, 5, 3],
      ],
      [
        [10, 3, 9, 9],
        [8, 3, 9, 1],
        [8, 1, 9, 1],
        [7, 9, 9, 3],
      ],
      [
        [8, 3, 9, 9],
        [7, 3, 5, 1],
        [9, 1, 9, 1],
        [9, 9, 8, 3],
      ],

      [
        [7, 3, 8, 9],
        [8, 3, 5, 1],
        [9, 1, 8, 1],
        [10, 9, 10, 3],
      ],
      [
        [6, 3, 6, 9],
        [10, 3, 10, 1],
        [10, 1, 10, 1],
        [10, 9, 10, 3],
      ],
      [
        [8, 3, 10, 9],
        [8, 3, 7, 1],
        [9, 1, 9, 1],
        [7, 9, 10, 3],
      ],
      [
        [7, 3, 7, 9],
        [8, 3, 8, 1],
        [8, 1, 8, 1],
        [7, 9, 7, 3],
      ],
      [
        [9, 3, 8, 9],
        [9, 3, 9, 1],
        [9, 1, 10, 1],
        [9, 9, 8, 3],
      ],
      [
        [7, 3, 10, 9],
        [7, 3, 7, 1],
        [8, 1, 10, 1],
        [8, 9, 10, 3],
      ],
      [
        [9, 3, 9, 9],
        [9, 3, 8, 1],
        [8, 1, 8, 1],
        [7, 9, 7, 3],
      ],
      [
        [5, 3, 8, 9],
        [8, 3, 8, 1],
        [8, 1, 8, 1],
        [8, 9, 8, 3],
      ],
      [
        [8, 3, 8, 9],
        [6, 3, 6, 1],
        [6, 1, 6, 1],
        [5, 9, 5, 3],
      ],
      [
        [7, 3, 8, 9],
        [9, 3, 8, 1],
        [9, 1, 8, 1],
        [7, 9, 6, 3],
      ],
      [
        [8, 3, 7, 9],
        [8, 3, 8, 1],
        [8, 1, 9, 1],
        [8, 9, 7, 3],
      ],
      [
        [8, 3, 8, 9],
        [8, 3, 6, 1],
        [9, 1, 8, 1],
        [7, 9, 9, 3],
      ],
      [
        [8, 3, 10, 9],
        [7, 3, 3, 1],
        [7, 1, 9, 1],
        [5, 9, 7, 3],
      ],
      [
        [9, 3, 9, 9],
        [9, 3, 9, 1],
        [9, 1, 9, 1],
        [9, 9, 9, 3],
      ],
      [
        [8, 3, 8, 9],
        [8, 3, 7, 1],
        [7, 1, 7, 1],
        [6, 9, 7, 3],
      ],
      [
        [8, 3, 8, 9],
        [9, 3, 9, 1],
        [8, 1, 8, 1],
        [6, 9, 6, 3],
      ],
      [
        [7, 3, 7, 9],
        [8, 3, 7, 1],
        [5, 1, 9, 1],
        [8, 9, 8, 3],
      ],
      [
        [9, 3, 8, 9],
        [8, 3, 5, 1],
        [9, 1, 7, 1],
        [7, 9, 9, 3],
      ],
      [
        [8, 3, 7, 9],
        [7, 3, 6, 1],
        [8, 1, 8, 1],
        [7, 9, 7, 3],
      ],
      [
        [7, 3, 7, 9],
        [8, 3, 7, 1],
        [8, 1, 7, 1],
        [7, 9, 6, 3],
      ],
      [
        [7, 3, 8, 9],
        [8, 3, 8, 1],
        [7, 1, 8, 1],
        [6, 9, 5, 3],
      ],
      [
        [9, 3, 9, 9],
        [9, 3, 9, 1],
        [8, 1, 8, 1],
        [8, 9, 9, 3],
      ],
      [
        [8, 3, 7, 9],
        [7, 3, 7, 1],
        [8, 1, 6, 1],
        [9, 9, 8, 3],
      ],
      [
        [6, 3, 8, 9],
        [7, 3, 8, 1],
        [9, 1, 9, 1],
        [9, 9, 9, 3],
      ],
      [
        [8, 3, 8, 9],
        [9, 3, 5, 1],
        [9, 1, 8, 1],
        [8, 9, 9, 3],
      ],
      [
        [7, 3, 7, 9],
        [7, 3, 8, 1],
        [7, 1, 7, 1],
        [8, 9, 7, 3],
      ],
    ];

    // const hasilakhirrr = data.map((item,index)=>{
    //   return this.HitungKuadrat(item, kriteria);
    //   // console.log('isi===',item);

    // })


    let nilai = [];
    let rank = [];
    for (const a of data) {
      nilai = [...nilai, this.HitungNilai(a, kriteria)];
      rank = [...rank, this.HitungRank(a, kriteria)];
    }

    this.setState({ nilaiHasil: nilai, rankHasil: rank, data: data }, () => {
      console.log(nilai);
      console.log("nilai==", this.state.nilaiHasil);
      console.log("datae==", this.state.data);

      console.log(rank);
      console.log("rank==", this.state.rankHasil);

      console.log("rank==", this.state.rankHasil[2][2]);
      console.log("rank==", this.state.rankHasil[1][2]);
      this.hitungborda();
    });

    // setTimeout(()=>{
    //   console.log(this.state.nilaiHasil[0]);

    // },2000)
  }

  // table(prop) {

  // }

  hitungborda = () => {

    let borda = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    let nAlter = this.state.rankHasil[0].length
    let nJuri = this.state.rankHasil.length
    for (let j = 0; j < nAlter; j++) {
      for (let i = 0; i < nJuri; i++) {
        borda[j][this.state.rankHasil[i][j] - 1] += this.state.nilaiHasil[i][j]
      }
    }
    // console.log(borda);

    let nAlter2 = borda.length;
    let nRankAlt2 = borda[0].length;
    for (let i = 0; i < nAlter2; i++) {
      for (let j = 0; j < nRankAlt2; j++) {
        borda[i][j] = borda[i][j] * ((nAlter2 + 1) - (j + 1))
        // console.log('kali');

      }
    }
    // console.log(borda);
    let poinBorda = [0, 0, 0, 0];
    for (let i = 0; i < nAlter2; i++) {
      for (let j = 0; j < nRankAlt2; j++) {
        poinBorda[i] = poinBorda[i] + borda[i][j]
        // console.log('jumlah');
      }
    }
    // console.log(poinBorda);
    let totalPoinBorda = 0;
    for (let i = 0; i < poinBorda.length; i++) {
      totalPoinBorda += poinBorda[i]
    }
    // console.log(totalPoinBorda);
    let nilaiBorda = [0, 0, 0, 0];
    for (let i = 0; i < poinBorda.length; i++) {
      nilaiBorda[i] = poinBorda[i] / totalPoinBorda
    }
    // console.log(nilaiBorda);
    let sorted = nilaiBorda.slice().sort(function (a, b) {
      return b - a;
    });
    // console.log(sorted);
    let rank = nilaiBorda.slice().map(function (v) {
      return sorted.indexOf(v) + 1;
    });
    // console.log(rank);

    this.setState({ dataBorda: borda, poinBorda: poinBorda, nilaiBorda: nilaiBorda, totalPoinBorda: totalPoinBorda, rankBorda: rank, isLoading: false }, () => {
      console.log(this.state.dataBorda);
      console.log(this.state.poinBorda);
      console.log(this.state.nilaiBorda);
      console.log(this.state.rankBorda);
    })
  }

  HitungNilai(data, kriteria) {
    let hasilAkar = [];
    for (const c in data[0]) {
      let hasilKuadrat = 0;
      for (const a of data) {
        hasilKuadrat += Math.pow(a[c], 2);
      }
      hasilAkar[c] = Math.sqrt(hasilKuadrat);
    }

    // cari hasil normalisasi
    let matriksNormalisasi = [];
    for (const a in data) {
      let hasilKriteria = [];
      for (const c in data[a]) {
        hasilKriteria[c] = data[a][c] / hasilAkar[c];
      }
      matriksNormalisasi[a] = hasilKriteria;
    }

    // ----------------------------------------
    // MATRIKS NILAI OPTIMASI MULTIOBJEK
    // ----------------------------------------

    let matriksOptimasi = [];
    for (const a in matriksNormalisasi) {
      let hasilKriteria = [];
      for (const c in data[a]) {
        hasilKriteria[c] = kriteria[c].bobot * matriksNormalisasi[a][c];
      }
      matriksOptimasi[a] = hasilKriteria;
    }

    // ----------------------------------------
    // HASIL NILAI OPTIMASI MULTIOBJEK
    // ----------------------------------------

    let nilaiMax = [];
    let nilaiMin = [];

    // mencari nilai max & min (jumlah semua total benefit & total cost)
    for (const a in matriksOptimasi) {
      let hasilTambahMax = 0;
      let hasilTambahMin = 0;
      for (const c in matriksOptimasi[a]) {
        if (kriteria[c].isBenefit) {
          hasilTambahMax += matriksOptimasi[a][c];
        } else {
          hasilTambahMin += matriksOptimasi[a][c];
        }
      }
      nilaiMax[a] = hasilTambahMax;
      nilaiMin[a] = hasilTambahMin;
    }

    let nilaiAkhir = [];

    // mencari nilai akhir
    for (const i in nilaiMax) {
      nilaiAkhir[i] = nilaiMax[i] - nilaiMin[i];
    }

    return nilaiAkhir;

  }

  HitungRank(data, kriteria) {
    let hasilAkar = [];
    for (const c in data[0]) {
      let hasilKuadrat = 0;
      for (const a of data) {
        hasilKuadrat += Math.pow(a[c], 2);
      }
      hasilAkar[c] = Math.sqrt(hasilKuadrat);
    }

    // cari hasil normalisasi
    let matriksNormalisasi = [];
    for (const a in data) {
      let hasilKriteria = [];
      for (const c in data[a]) {
        hasilKriteria[c] = data[a][c] / hasilAkar[c];
      }
      matriksNormalisasi[a] = hasilKriteria;
    }

    // ----------------------------------------
    // MATRIKS NILAI OPTIMASI MULTIOBJEK
    // ----------------------------------------

    let matriksOptimasi = [];
    for (const a in matriksNormalisasi) {
      let hasilKriteria = [];
      for (const c in data[a]) {
        hasilKriteria[c] = kriteria[c].bobot * matriksNormalisasi[a][c];
      }
      matriksOptimasi[a] = hasilKriteria;
    }

    // ----------------------------------------
    // HASIL NILAI OPTIMASI MULTIOBJEK
    // ----------------------------------------

    let nilaiMax = [];
    let nilaiMin = [];

    // mencari nilai max & min (jumlah semua total benefit & total cost)
    for (const a in matriksOptimasi) {
      let hasilTambahMax = 0;
      let hasilTambahMin = 0;
      for (const c in matriksOptimasi[a]) {
        if (kriteria[c].isBenefit) {
          hasilTambahMax += matriksOptimasi[a][c];
        } else {
          hasilTambahMin += matriksOptimasi[a][c];
        }
      }
      nilaiMax[a] = hasilTambahMax;
      nilaiMin[a] = hasilTambahMin;
    }

    let nilaiAkhir = [];

    // mencari nilai akhir
    for (const i in nilaiMax) {
      nilaiAkhir[i] = nilaiMax[i] - nilaiMin[i];
    }

    // mencari ranking
    let sorted = nilaiAkhir.slice().sort(function (a, b) {
      return b - a;
    });
    // .reverse();
    let rank = nilaiAkhir.slice().map(function (v) {
      return sorted.indexOf(v) + 1;
    });

    return rank;
  }
  render() {
    return (
      <div>
        <div className="container-fluid" style={{ backgroundColor: "#1E1E1E" }}>
          <div className="row">
            <div className="col-12">
              <nav class="navbar sticky-top js-scroll-trigger navbar-expand-sm navbar-dark shadow p-3 mb-5 rounded" style={{ backgroundColor: "#262626" }}>
                <a className="navbar-brand" href="/#">SPK</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#hasilSurvey">Hasil Survey</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#penghitungan">Hasil Perhitungan</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div className="row">
                    <div className="row">
                      <div className="col-12">
                        <h1 className="" style={{ fontFamily: "'Righteous', cursive;", color: "white", fontSize: "4.5em", textAlign: "center", textShadow: "2px 2px 4px #000000" }}>SPKK - KANAL YOUTUBE PEMBELAJARAN ANDROID TERBAIK</h1>
                        <hr style={{ borderTop: "1px solid white", height: "5px", backgroundcolor: "white", width: "100%", color: "white" }}

                        />
                        <p style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center", textShadow: "2px 2px 4px #000000" }}>SISTEM PENDUKUNG KEPUTUSAN KELOMPOK KANAL YOUTUBE PEMBELAJARAN ANDROID TERBAIK METODE MOORA - BORDA</p>
                      </div>
                    </div>
                    <div className="col">
                      <section id="hasilSurvey" style={{padding: "150px 0"}}>
                      <div className="row">
                        <div className="col-12">
                          <div className="card shadow p-3 mb-5 rounded" style={{ backgroundColor: "#262626" }}>
                            <div className="row">
                              <div className="col-12">
                                <h5 style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center", textShadow: "2px 2px 4px #000000" }}>Hasil Survey Bobot Kriteria</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="m-2">
                                  <ProgressBar striped variant="success" now={28} key={1} label={`Kejelasan Penyampaian 28%`} />
                                </div>
                                <div className="m-2" >
                                  <ProgressBar striped variant="warning" now={29} key={1} label={`Jumlah Konten 29%`} />
                                </div>
                                <div className="m-2">
                                  <ProgressBar striped variant="danger" now={22} key={1} label={`Durasi 22%`} />
                                </div>
                                <div className="m-2">
                                  <ProgressBar striped variant="info" now={19} key={1} label={`Jumlah View 19%`} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </section>
                      <section id="penghitungan" style={{padding: "150px 0"}}>
                      <div className="row">
                        <div className="col-12">
                          <Accordion>
                            <Card style={{ backgroundColor: "#262626" }}>
                              <Card.Header>
                                <Accordion.Toggle as={Button} eventKey="0">
                                  Data MOORA
                              </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 1
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[0][0][0]}</td>
                                                      <td>{this.state.data[0][0][1]}</td>
                                                      <td>{this.state.data[0][0][2]}</td>
                                                      <td>{this.state.data[0][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[0][1][0]}</td>
                                                      <td>{this.state.data[0][1][1]}</td>
                                                      <td>{this.state.data[0][1][2]}</td>
                                                      <td>{this.state.data[0][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[0][2][0]}</td>
                                                      <td>{this.state.data[0][2][1]}</td>
                                                      <td>{this.state.data[0][2][2]}</td>
                                                      <td>{this.state.data[0][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[0][3][0]}</td>
                                                      <td>{this.state.data[0][3][1]}</td>
                                                      <td>{this.state.data[0][3][2]}</td>
                                                      <td>{this.state.data[0][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[0][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[0][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[0][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[0][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 2
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[1][0][0]}</td>
                                                      <td>{this.state.data[1][0][1]}</td>
                                                      <td>{this.state.data[1][0][2]}</td>
                                                      <td>{this.state.data[1][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[1][1][0]}</td>
                                                      <td>{this.state.data[1][1][1]}</td>
                                                      <td>{this.state.data[1][1][2]}</td>
                                                      <td>{this.state.data[1][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[1][2][0]}</td>
                                                      <td>{this.state.data[1][2][1]}</td>
                                                      <td>{this.state.data[1][2][2]}</td>
                                                      <td>{this.state.data[1][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[1][3][0]}</td>
                                                      <td>{this.state.data[1][3][1]}</td>
                                                      <td>{this.state.data[1][3][2]}</td>
                                                      <td>{this.state.data[1][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[1][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[1][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[1][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[1][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 3
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[2][0][0]}</td>
                                                      <td>{this.state.data[2][0][1]}</td>
                                                      <td>{this.state.data[2][0][2]}</td>
                                                      <td>{this.state.data[2][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[2][1][0]}</td>
                                                      <td>{this.state.data[2][1][1]}</td>
                                                      <td>{this.state.data[2][1][2]}</td>
                                                      <td>{this.state.data[2][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[2][2][0]}</td>
                                                      <td>{this.state.data[2][2][1]}</td>
                                                      <td>{this.state.data[2][2][2]}</td>
                                                      <td>{this.state.data[2][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[2][3][0]}</td>
                                                      <td>{this.state.data[2][3][1]}</td>
                                                      <td>{this.state.data[2][3][2]}</td>
                                                      <td>{this.state.data[2][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[2][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[2][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[2][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[2][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 4
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[3][0][0]}</td>
                                                      <td>{this.state.data[3][0][1]}</td>
                                                      <td>{this.state.data[3][0][2]}</td>
                                                      <td>{this.state.data[3][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[3][1][0]}</td>
                                                      <td>{this.state.data[3][1][1]}</td>
                                                      <td>{this.state.data[3][1][2]}</td>
                                                      <td>{this.state.data[3][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[3][2][0]}</td>
                                                      <td>{this.state.data[3][2][1]}</td>
                                                      <td>{this.state.data[3][2][2]}</td>
                                                      <td>{this.state.data[3][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[3][3][0]}</td>
                                                      <td>{this.state.data[3][3][1]}</td>
                                                      <td>{this.state.data[3][3][2]}</td>
                                                      <td>{this.state.data[3][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[3][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[3][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[3][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 5
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[4][0][0]}</td>
                                                      <td>{this.state.data[4][0][1]}</td>
                                                      <td>{this.state.data[4][0][2]}</td>
                                                      <td>{this.state.data[4][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[4][1][0]}</td>
                                                      <td>{this.state.data[4][1][1]}</td>
                                                      <td>{this.state.data[4][1][2]}</td>
                                                      <td>{this.state.data[4][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[4][2][0]}</td>
                                                      <td>{this.state.data[4][2][1]}</td>
                                                      <td>{this.state.data[4][2][2]}</td>
                                                      <td>{this.state.data[4][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[4][3][0]}</td>
                                                      <td>{this.state.data[4][3][1]}</td>
                                                      <td>{this.state.data[4][3][2]}</td>
                                                      <td>{this.state.data[4][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[4][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[4][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[4][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[4][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 6
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[5][0][0]}</td>
                                                      <td>{this.state.data[5][0][1]}</td>
                                                      <td>{this.state.data[5][0][2]}</td>
                                                      <td>{this.state.data[5][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[5][1][0]}</td>
                                                      <td>{this.state.data[5][1][1]}</td>
                                                      <td>{this.state.data[5][1][2]}</td>
                                                      <td>{this.state.data[5][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[5][2][0]}</td>
                                                      <td>{this.state.data[5][2][1]}</td>
                                                      <td>{this.state.data[5][2][2]}</td>
                                                      <td>{this.state.data[5][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[5][3][0]}</td>
                                                      <td>{this.state.data[5][3][1]}</td>
                                                      <td>{this.state.data[5][3][2]}</td>
                                                      <td>{this.state.data[5][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[5][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[5][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[5][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[5][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 7
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[6][0][0]}</td>
                                                      <td>{this.state.data[6][0][1]}</td>
                                                      <td>{this.state.data[6][0][2]}</td>
                                                      <td>{this.state.data[6][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[6][1][0]}</td>
                                                      <td>{this.state.data[6][1][1]}</td>
                                                      <td>{this.state.data[6][1][2]}</td>
                                                      <td>{this.state.data[6][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[6][2][0]}</td>
                                                      <td>{this.state.data[6][2][1]}</td>
                                                      <td>{this.state.data[6][2][2]}</td>
                                                      <td>{this.state.data[6][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[6][3][0]}</td>
                                                      <td>{this.state.data[6][3][1]}</td>
                                                      <td>{this.state.data[6][3][2]}</td>
                                                      <td>{this.state.data[6][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[6][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[6][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[6][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[6][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 8
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[7][0][0]}</td>
                                                      <td>{this.state.data[7][0][1]}</td>
                                                      <td>{this.state.data[7][0][2]}</td>
                                                      <td>{this.state.data[7][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[7][1][0]}</td>
                                                      <td>{this.state.data[7][1][1]}</td>
                                                      <td>{this.state.data[7][1][2]}</td>
                                                      <td>{this.state.data[7][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[7][2][0]}</td>
                                                      <td>{this.state.data[7][2][1]}</td>
                                                      <td>{this.state.data[7][2][2]}</td>
                                                      <td>{this.state.data[7][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[7][3][0]}</td>
                                                      <td>{this.state.data[7][3][1]}</td>
                                                      <td>{this.state.data[7][3][2]}</td>
                                                      <td>{this.state.data[7][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[7][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[7][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[7][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[7][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 9
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[8][0][0]}</td>
                                                      <td>{this.state.data[8][0][1]}</td>
                                                      <td>{this.state.data[8][0][2]}</td>
                                                      <td>{this.state.data[8][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[8][1][0]}</td>
                                                      <td>{this.state.data[8][1][1]}</td>
                                                      <td>{this.state.data[8][1][2]}</td>
                                                      <td>{this.state.data[8][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[8][2][0]}</td>
                                                      <td>{this.state.data[8][2][1]}</td>
                                                      <td>{this.state.data[8][2][2]}</td>
                                                      <td>{this.state.data[8][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[8][3][0]}</td>
                                                      <td>{this.state.data[8][3][1]}</td>
                                                      <td>{this.state.data[8][3][2]}</td>
                                                      <td>{this.state.data[8][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[8][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[8][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[8][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[8][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 10
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[9][0][0]}</td>
                                                      <td>{this.state.data[9][0][1]}</td>
                                                      <td>{this.state.data[9][0][2]}</td>
                                                      <td>{this.state.data[9][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[9][1][0]}</td>
                                                      <td>{this.state.data[9][1][1]}</td>
                                                      <td>{this.state.data[9][1][2]}</td>
                                                      <td>{this.state.data[9][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[9][2][0]}</td>
                                                      <td>{this.state.data[9][2][1]}</td>
                                                      <td>{this.state.data[9][2][2]}</td>
                                                      <td>{this.state.data[9][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[9][3][0]}</td>
                                                      <td>{this.state.data[9][3][1]}</td>
                                                      <td>{this.state.data[9][3][2]}</td>
                                                      <td>{this.state.data[9][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[9][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[9][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[9][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[9][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 11
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[10][0][0]}</td>
                                                      <td>{this.state.data[10][0][1]}</td>
                                                      <td>{this.state.data[10][0][2]}</td>
                                                      <td>{this.state.data[10][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[10][1][0]}</td>
                                                      <td>{this.state.data[10][1][1]}</td>
                                                      <td>{this.state.data[10][1][2]}</td>
                                                      <td>{this.state.data[10][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[10][2][0]}</td>
                                                      <td>{this.state.data[10][2][1]}</td>
                                                      <td>{this.state.data[10][2][2]}</td>
                                                      <td>{this.state.data[10][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[10][3][0]}</td>
                                                      <td>{this.state.data[10][3][1]}</td>
                                                      <td>{this.state.data[10][3][2]}</td>
                                                      <td>{this.state.data[10][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[10][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[10][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[10][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[10][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 12
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[11][0][0]}</td>
                                                      <td>{this.state.data[11][0][1]}</td>
                                                      <td>{this.state.data[11][0][2]}</td>
                                                      <td>{this.state.data[11][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[11][1][0]}</td>
                                                      <td>{this.state.data[11][1][1]}</td>
                                                      <td>{this.state.data[11][1][2]}</td>
                                                      <td>{this.state.data[11][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[11][2][0]}</td>
                                                      <td>{this.state.data[11][2][1]}</td>
                                                      <td>{this.state.data[11][2][2]}</td>
                                                      <td>{this.state.data[11][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[11][3][0]}</td>
                                                      <td>{this.state.data[11][3][1]}</td>
                                                      <td>{this.state.data[11][3][2]}</td>
                                                      <td>{this.state.data[11][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[11][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[11][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[11][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[11][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 13
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[12][0][0]}</td>
                                                      <td>{this.state.data[12][0][1]}</td>
                                                      <td>{this.state.data[12][0][2]}</td>
                                                      <td>{this.state.data[12][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[12][1][0]}</td>
                                                      <td>{this.state.data[12][1][1]}</td>
                                                      <td>{this.state.data[12][1][2]}</td>
                                                      <td>{this.state.data[12][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[12][2][0]}</td>
                                                      <td>{this.state.data[12][2][1]}</td>
                                                      <td>{this.state.data[12][2][2]}</td>
                                                      <td>{this.state.data[12][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[12][3][0]}</td>
                                                      <td>{this.state.data[12][3][1]}</td>
                                                      <td>{this.state.data[12][3][2]}</td>
                                                      <td>{this.state.data[12][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[12][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[12][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[12][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[12][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 14
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[13][0][0]}</td>
                                                      <td>{this.state.data[13][0][1]}</td>
                                                      <td>{this.state.data[13][0][2]}</td>
                                                      <td>{this.state.data[13][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[13][1][0]}</td>
                                                      <td>{this.state.data[13][1][1]}</td>
                                                      <td>{this.state.data[13][1][2]}</td>
                                                      <td>{this.state.data[13][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[13][2][0]}</td>
                                                      <td>{this.state.data[13][2][1]}</td>
                                                      <td>{this.state.data[13][2][2]}</td>
                                                      <td>{this.state.data[13][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[13][3][0]}</td>
                                                      <td>{this.state.data[13][3][1]}</td>
                                                      <td>{this.state.data[13][3][2]}</td>
                                                      <td>{this.state.data[13][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[13][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[13][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[13][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[13][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 15
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[14][0][0]}</td>
                                                      <td>{this.state.data[14][0][1]}</td>
                                                      <td>{this.state.data[14][0][2]}</td>
                                                      <td>{this.state.data[14][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[14][1][0]}</td>
                                                      <td>{this.state.data[14][1][1]}</td>
                                                      <td>{this.state.data[14][1][2]}</td>
                                                      <td>{this.state.data[14][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[14][2][0]}</td>
                                                      <td>{this.state.data[14][2][1]}</td>
                                                      <td>{this.state.data[14][2][2]}</td>
                                                      <td>{this.state.data[14][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[14][3][0]}</td>
                                                      <td>{this.state.data[14][3][1]}</td>
                                                      <td>{this.state.data[14][3][2]}</td>
                                                      <td>{this.state.data[14][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[14][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[14][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[14][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[14][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 16
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[15][0][0]}</td>
                                                      <td>{this.state.data[15][0][1]}</td>
                                                      <td>{this.state.data[15][0][2]}</td>
                                                      <td>{this.state.data[15][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[15][1][0]}</td>
                                                      <td>{this.state.data[15][1][1]}</td>
                                                      <td>{this.state.data[15][1][2]}</td>
                                                      <td>{this.state.data[15][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[15][2][0]}</td>
                                                      <td>{this.state.data[15][2][1]}</td>
                                                      <td>{this.state.data[15][2][2]}</td>
                                                      <td>{this.state.data[15][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[15][3][0]}</td>
                                                      <td>{this.state.data[15][3][1]}</td>
                                                      <td>{this.state.data[15][3][2]}</td>
                                                      <td>{this.state.data[15][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[15][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[15][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[15][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[15][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 17
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[16][0][0]}</td>
                                                      <td>{this.state.data[16][0][1]}</td>
                                                      <td>{this.state.data[16][0][2]}</td>
                                                      <td>{this.state.data[16][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[16][1][0]}</td>
                                                      <td>{this.state.data[16][1][1]}</td>
                                                      <td>{this.state.data[16][1][2]}</td>
                                                      <td>{this.state.data[16][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[16][2][0]}</td>
                                                      <td>{this.state.data[16][2][1]}</td>
                                                      <td>{this.state.data[16][2][2]}</td>
                                                      <td>{this.state.data[16][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[16][3][0]}</td>
                                                      <td>{this.state.data[16][3][1]}</td>
                                                      <td>{this.state.data[16][3][2]}</td>
                                                      <td>{this.state.data[16][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[16][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[16][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[16][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[16][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 18
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[17][0][0]}</td>
                                                      <td>{this.state.data[17][0][1]}</td>
                                                      <td>{this.state.data[17][0][2]}</td>
                                                      <td>{this.state.data[17][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[17][1][0]}</td>
                                                      <td>{this.state.data[17][1][1]}</td>
                                                      <td>{this.state.data[17][1][2]}</td>
                                                      <td>{this.state.data[17][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[17][2][0]}</td>
                                                      <td>{this.state.data[17][2][1]}</td>
                                                      <td>{this.state.data[17][2][2]}</td>
                                                      <td>{this.state.data[17][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[17][3][0]}</td>
                                                      <td>{this.state.data[17][3][1]}</td>
                                                      <td>{this.state.data[17][3][2]}</td>
                                                      <td>{this.state.data[17][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[17][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[17][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[17][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[17][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 19
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[18][0][0]}</td>
                                                      <td>{this.state.data[18][0][1]}</td>
                                                      <td>{this.state.data[18][0][2]}</td>
                                                      <td>{this.state.data[18][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[18][1][0]}</td>
                                                      <td>{this.state.data[18][1][1]}</td>
                                                      <td>{this.state.data[18][1][2]}</td>
                                                      <td>{this.state.data[18][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[18][2][0]}</td>
                                                      <td>{this.state.data[18][2][1]}</td>
                                                      <td>{this.state.data[18][2][2]}</td>
                                                      <td>{this.state.data[18][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[18][3][0]}</td>
                                                      <td>{this.state.data[18][3][1]}</td>
                                                      <td>{this.state.data[18][3][2]}</td>
                                                      <td>{this.state.data[18][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[18][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[18][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[18][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[18][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 20
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[19][0][0]}</td>
                                                      <td>{this.state.data[19][0][1]}</td>
                                                      <td>{this.state.data[19][0][2]}</td>
                                                      <td>{this.state.data[19][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[19][1][0]}</td>
                                                      <td>{this.state.data[19][1][1]}</td>
                                                      <td>{this.state.data[19][1][2]}</td>
                                                      <td>{this.state.data[19][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[19][2][0]}</td>
                                                      <td>{this.state.data[19][2][1]}</td>
                                                      <td>{this.state.data[19][2][2]}</td>
                                                      <td>{this.state.data[19][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[19][3][0]}</td>
                                                      <td>{this.state.data[19][3][1]}</td>
                                                      <td>{this.state.data[19][3][2]}</td>
                                                      <td>{this.state.data[19][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[19][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[19][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[19][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[19][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 21
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[20][0][0]}</td>
                                                      <td>{this.state.data[20][0][1]}</td>
                                                      <td>{this.state.data[20][0][2]}</td>
                                                      <td>{this.state.data[20][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[20][1][0]}</td>
                                                      <td>{this.state.data[20][1][1]}</td>
                                                      <td>{this.state.data[20][1][2]}</td>
                                                      <td>{this.state.data[20][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[20][2][0]}</td>
                                                      <td>{this.state.data[20][2][1]}</td>
                                                      <td>{this.state.data[20][2][2]}</td>
                                                      <td>{this.state.data[20][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[20][3][0]}</td>
                                                      <td>{this.state.data[20][3][1]}</td>
                                                      <td>{this.state.data[20][3][2]}</td>
                                                      <td>{this.state.data[20][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[20][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[20][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[20][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[20][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 22
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[21][0][0]}</td>
                                                      <td>{this.state.data[21][0][1]}</td>
                                                      <td>{this.state.data[21][0][2]}</td>
                                                      <td>{this.state.data[21][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[21][1][0]}</td>
                                                      <td>{this.state.data[21][1][1]}</td>
                                                      <td>{this.state.data[21][1][2]}</td>
                                                      <td>{this.state.data[21][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[21][2][0]}</td>
                                                      <td>{this.state.data[21][2][1]}</td>
                                                      <td>{this.state.data[21][2][2]}</td>
                                                      <td>{this.state.data[21][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[21][3][0]}</td>
                                                      <td>{this.state.data[21][3][1]}</td>
                                                      <td>{this.state.data[21][3][2]}</td>
                                                      <td>{this.state.data[21][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[21][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[21][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[21][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[21][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 23
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[22][0][0]}</td>
                                                      <td>{this.state.data[22][0][1]}</td>
                                                      <td>{this.state.data[22][0][2]}</td>
                                                      <td>{this.state.data[22][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[22][1][0]}</td>
                                                      <td>{this.state.data[22][1][1]}</td>
                                                      <td>{this.state.data[22][1][2]}</td>
                                                      <td>{this.state.data[22][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[22][2][0]}</td>
                                                      <td>{this.state.data[22][2][1]}</td>
                                                      <td>{this.state.data[22][2][2]}</td>
                                                      <td>{this.state.data[22][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[22][3][0]}</td>
                                                      <td>{this.state.data[22][3][1]}</td>
                                                      <td>{this.state.data[22][3][2]}</td>
                                                      <td>{this.state.data[22][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[22][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[22][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[22][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[22][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 24
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[23][0][0]}</td>
                                                      <td>{this.state.data[23][0][1]}</td>
                                                      <td>{this.state.data[23][0][2]}</td>
                                                      <td>{this.state.data[23][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[23][1][0]}</td>
                                                      <td>{this.state.data[23][1][1]}</td>
                                                      <td>{this.state.data[23][1][2]}</td>
                                                      <td>{this.state.data[23][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[23][2][0]}</td>
                                                      <td>{this.state.data[23][2][1]}</td>
                                                      <td>{this.state.data[23][2][2]}</td>
                                                      <td>{this.state.data[23][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[23][3][0]}</td>
                                                      <td>{this.state.data[23][3][1]}</td>
                                                      <td>{this.state.data[23][3][2]}</td>
                                                      <td>{this.state.data[23][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[23][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[23][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[23][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[23][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 25
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[24][0][0]}</td>
                                                      <td>{this.state.data[24][0][1]}</td>
                                                      <td>{this.state.data[24][0][2]}</td>
                                                      <td>{this.state.data[24][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[24][1][0]}</td>
                                                      <td>{this.state.data[24][1][1]}</td>
                                                      <td>{this.state.data[24][1][2]}</td>
                                                      <td>{this.state.data[24][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[24][2][0]}</td>
                                                      <td>{this.state.data[24][2][1]}</td>
                                                      <td>{this.state.data[24][2][2]}</td>
                                                      <td>{this.state.data[24][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[24][3][0]}</td>
                                                      <td>{this.state.data[24][3][1]}</td>
                                                      <td>{this.state.data[24][3][2]}</td>
                                                      <td>{this.state.data[24][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[24][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[24][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[24][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[24][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 26
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[25][0][0]}</td>
                                                      <td>{this.state.data[25][0][1]}</td>
                                                      <td>{this.state.data[25][0][2]}</td>
                                                      <td>{this.state.data[25][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[25][1][0]}</td>
                                                      <td>{this.state.data[25][1][1]}</td>
                                                      <td>{this.state.data[25][1][2]}</td>
                                                      <td>{this.state.data[25][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[25][2][0]}</td>
                                                      <td>{this.state.data[25][2][1]}</td>
                                                      <td>{this.state.data[25][2][2]}</td>
                                                      <td>{this.state.data[25][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[25][3][0]}</td>
                                                      <td>{this.state.data[25][3][1]}</td>
                                                      <td>{this.state.data[25][3][2]}</td>
                                                      <td>{this.state.data[25][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[25][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[25][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[25][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[25][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 27
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[26][0][0]}</td>
                                                      <td>{this.state.data[26][0][1]}</td>
                                                      <td>{this.state.data[26][0][2]}</td>
                                                      <td>{this.state.data[26][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[26][1][0]}</td>
                                                      <td>{this.state.data[26][1][1]}</td>
                                                      <td>{this.state.data[26][1][2]}</td>
                                                      <td>{this.state.data[26][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[26][2][0]}</td>
                                                      <td>{this.state.data[26][2][1]}</td>
                                                      <td>{this.state.data[26][2][2]}</td>
                                                      <td>{this.state.data[26][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[26][3][0]}</td>
                                                      <td>{this.state.data[26][3][1]}</td>
                                                      <td>{this.state.data[26][3][2]}</td>
                                                      <td>{this.state.data[26][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[26][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[26][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[26][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[26][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 28
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[27][0][0]}</td>
                                                      <td>{this.state.data[27][0][1]}</td>
                                                      <td>{this.state.data[27][0][2]}</td>
                                                      <td>{this.state.data[27][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[27][1][0]}</td>
                                                      <td>{this.state.data[27][1][1]}</td>
                                                      <td>{this.state.data[27][1][2]}</td>
                                                      <td>{this.state.data[27][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[27][2][0]}</td>
                                                      <td>{this.state.data[27][2][1]}</td>
                                                      <td>{this.state.data[27][2][2]}</td>
                                                      <td>{this.state.data[27][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[27][3][0]}</td>
                                                      <td>{this.state.data[27][3][1]}</td>
                                                      <td>{this.state.data[27][3][2]}</td>
                                                      <td>{this.state.data[27][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[27][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[27][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[27][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[27][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 29
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[28][0][0]}</td>
                                                      <td>{this.state.data[28][0][1]}</td>
                                                      <td>{this.state.data[28][0][2]}</td>
                                                      <td>{this.state.data[28][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[28][1][0]}</td>
                                                      <td>{this.state.data[28][1][1]}</td>
                                                      <td>{this.state.data[28][1][2]}</td>
                                                      <td>{this.state.data[28][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[28][2][0]}</td>
                                                      <td>{this.state.data[28][2][1]}</td>
                                                      <td>{this.state.data[28][2][2]}</td>
                                                      <td>{this.state.data[28][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[28][3][0]}</td>
                                                      <td>{this.state.data[28][3][1]}</td>
                                                      <td>{this.state.data[28][3][2]}</td>
                                                      <td>{this.state.data[28][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[28][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[28][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[28][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[28][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <div className="row">
                                      <div className="col-12">
                                        <Accordion>
                                          <Card style={{ backgroundColor: "#262626" }} >
                                            <Card.Header>
                                              <span style={{ margin: "auto" }}  ><Accordion.Toggle as={Button} eventKey="0">
                                                Data Responden 30
                                </Accordion.Toggle>
                                              </span>
                                              <span style={{ marginLeft: "20px" }}><Accordion.Toggle as={Button} eventKey="1">
                                                Hasil Moora
                                </Accordion.Toggle>
                                              </span>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      {/* ini th jumlahnya 5 */}
                                                      <th></th>
                                                      <th>Kejelasan Materi</th>
                                                      <th>Jumlah Konten</th>
                                                      <th>Durasi</th>
                                                      <th>Jumlah Views</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td >TVAC Studio</td>

                                                      <td>{this.state.data[29][0][0]}</td>
                                                      <td>{this.state.data[29][0][1]}</td>
                                                      <td>{this.state.data[29][0][2]}</td>
                                                      <td>{this.state.data[29][0][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.data[29][1][0]}</td>
                                                      <td>{this.state.data[29][1][1]}</td>
                                                      <td>{this.state.data[29][1][2]}</td>
                                                      <td>{this.state.data[29][1][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >IDStack</td>
                                                      <td>{this.state.data[29][2][0]}</td>
                                                      <td>{this.state.data[29][2][1]}</td>
                                                      <td>{this.state.data[29][2][2]}</td>
                                                      <td>{this.state.data[29][2][3]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td >Coding in Flow</td>
                                                      <td>{this.state.data[29][3][0]}</td>
                                                      <td>{this.state.data[29][3][1]}</td>
                                                      <td>{this.state.data[29][3][2]}</td>
                                                      <td>{this.state.data[29][3][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                <table className="table" style={{ fontFamily: "'Righteous', cursive;", color: "white", textAlign: "center" }}>
                                                  <thead>
                                                    <tr>
                                                      <th></th>
                                                      <th>Nilai Yi</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>TVAC Studio</td>
                                                      <td>{this.state.nilaiHasil[29][0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Robby Dianputra</td>
                                                      <td>{this.state.nilaiHasil[29][1]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>IDStack</td>
                                                      <td>{this.state.nilaiHasil[29][2]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Coding in Flow</td>
                                                      <td>{this.state.nilaiHasil[29][3]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </Card.Body>
                                            </Accordion.Collapse>
                                          </Card>
                                        </Accordion>
                                      </div>
                                    </div>
                                  }

                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        </div>
                      </div>

                      <div className="row mt-5">
                        <div className="col-12">
                          <Accordion>
                            <Card className="shadow p-3 mb-5" style={{ backgroundColor: "#262626" }}>
                              <Card.Header>
                                <Accordion.Toggle as={Button} eventKey="0">
                                  Hasil Borda
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  {(this.state.isLoading) ? console.log("isLoading") :
                                    <table className="table" style={{ backgroundColor: "#262626", color:"white" }}>
                                      <thead>
                                        <tr>
                                          <th className="text-center" rowspan="2">Alternatif</th>
                                          <th className="text-center" colspan="4">Ranking</th>
                                          <th className="text-center" rowspan="2">Poin Borda</th>
                                          <th className="text-center" rowspan="2">Nilai Borda</th>
                                          <th className="text-center" rowspan="2">Rank</th>
                                        </tr>
                                        <tr>
                                          <th>1</th>
                                          <th>2</th>
                                          <th>3</th>
                                          <th>4</th>
                                        </tr>
                                      </thead>
                                      <tbody>

                                        <tr>
                                          <td>TVAC Studio</td>
                                          <td>{(this.state.dataBorda[0][0]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[0][1]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[0][2]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[0][3]).toFixed(2)}</td>
                                          <td>{(this.state.poinBorda[0]).toFixed(2)}</td>
                                          <td>{(this.state.nilaiBorda[0]).toFixed(2)}</td>
                                          <td>{this.state.rankBorda[0]}</td>
                                        </tr>
                                        <tr>
                                          <td>Robby Dianputra</td>
                                          <td>{(this.state.dataBorda[1][0]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[1][1]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[1][2]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[1][3]).toFixed(2)}</td>
                                          <td>{(this.state.poinBorda[1]).toFixed(2)}</td>
                                          <td>{(this.state.nilaiBorda[1]).toFixed(2)}</td>
                                          <td>{this.state.rankBorda[1]}</td>
                                        </tr>
                                        <tr>
                                          <td>IDStack</td>
                                          <td>{(this.state.dataBorda[2][0]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[2][1]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[2][2]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[2][3]).toFixed(2)}</td>
                                          <td>{(this.state.poinBorda[2]).toFixed(2)}</td>
                                          <td>{(this.state.nilaiBorda[2]).toFixed(2)}</td>
                                          <td>{this.state.rankBorda[2]}</td>
                                        </tr>
                                        <tr>
                                          <td>Coding in Flow</td>
                                          <td>{(this.state.dataBorda[3][0]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[3][1]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[3][2]).toFixed(2)}</td>
                                          <td>{(this.state.dataBorda[3][3]).toFixed(2)}</td>
                                          <td>{(this.state.poinBorda[3]).toFixed(2)}</td>
                                          <td>{(this.state.nilaiBorda[3]).toFixed(2)}</td>
                                          <td>{this.state.rankBorda[3]}</td>
                                        </tr>
                                        <tr>
                                          <td>Bobot Borda</td>
                                          <td>4</td>
                                          <td>3</td>
                                          <td>2</td>
                                          <td>1</td>
                                          <td>{(this.state.totalPoinBorda).toFixed(2)}</td>
                                        </tr>
                                      </tbody>

                                    </table>
                                  }
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        </div>
                      </div>
                    </section>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
              <div className="row">
                <div className="col-12 text-center" style={{color:"white"}}>
                  <h1>About</h1>
                  <p>Vian Navalino - 1741720203</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
