import { InfoModel } from './../../models/info.model';
import { NasaService } from './../../services/nasa.service';
import { Component, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public nasaService:NasaService){}

  infoData:InfoModel={
      copyright:'',
        date:'',
        explanation:'',
        hdurl:'',
        title:''
  }

  id = "tsparticles";
  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#f8f8fa"
      },
      links: {
        color: "#FFFFFF",
        distance: 170,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        random: false,
        speed: 1.5,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 110
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };

  ngOnInit(){
    this.info();
  }

particlesLoaded(container: Container): void {
}

async particlesInit(engine: Engine): Promise<void> {

  // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(engine);
}
  info(){
    this.nasaService.getInfo().subscribe(data=>{
      this.infoData = data
      console.log(this.infoData)
    })
  }
}
