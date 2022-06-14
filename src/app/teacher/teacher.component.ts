import { AfterViewInit, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/components/base.component';
import { IframeService } from '../shared/iframe.service';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
  domain: string = "meet.jit.si"; // For self hosted use your domain
  room: any;
  options: any;
  api: any;
  user: any;
  iframe: any;


  userList=['ali','ahmad','samer']
  // For Custom Controls
  isAudioMuted = false;
  isVideoMuted = false;

  constructor(
    injector :Injector,
    private router: Router,
    private iframeService: IframeService
  ) { 
    super(injector);
  }

  ngOnDestroy(): void {
    this.api.dispose()
  }

  ngOnInit(): void {
    this.room = 'firstclass-cs123-ali'; // Set your room name
    this.user = {
      name: 'ali aljonde' // Set your username
    }
  }

  ngAfterViewInit(): void {
    this.options = {
      roomName: this.room,
      width: 1300,
      height: 700,
      configOverwrite: {
        prejoinPageEnabled: false,
        disableInviteFunctions: true
      },

      interfaceConfigOverwrite: {
        HIDE_INVITE_MORE_HEADER: true
      },
      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
        displayName: this.user.name
      },
    }

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);

    this.api.addEventListeners({
      //participantJoined: this.handleParticipantJoined,
      knockingParticipant: this.handleknockingParticipant,
      participantRoleChanged: this.participantRoleChanged
    }) 

    this.iframe = this.api.getIFrame();
    this.iframeService.setIframe(this.iframe)

    console.log(this.iframe.src)
  }

  // handleParticipantJoined = async (participant) => {
  //   console.log("handleParticipantJoined", participant); // { id: "2baa184e", displayName: "Shanu Verma", formattedDisplayName: "Shanu Verma" }
  //   if (participant.displayName != 'ali') {
  //    //  this.api.executeCommand('kickParticipant', participant.id);
  //   }
  // }

  handleknockingParticipant = async (participant :any) => {
    console.log("handleknockingParticipant", participant);
    if (this.checkUsers(participant.participant.name)) {
      this.api.executeCommand('answerKnockingParticipant', participant.participant.id, true)
    }
    else {
      this.api.executeCommand('answerKnockingParticipant', participant.participant.id, false)
    }
  }

  participantRoleChanged = async (event:any) => {
    if (event.role == "moderator") {
      this.api.executeCommand('password', '123123123');
      this.api.executeCommand('toggleLobby', true);
   }
  }

  checkUsers(name :any){
    return this.userList.find(el=>el==name) && !this.api.getParticipantsInfo().find((el:any)=>el.displayName == name)
  }

  studentPage() {
    this.router.navigate(['student'])
  }

  getInfo() {
    console.log(this.api.getParticipantsInfo())
    this.api.getParticipantsInfo().forEach((element:any) => {
      if (!element.formattedDisplayName.includes('(me)')) {
        this.api.executeCommand('kickParticipant', element.participantId);
      }
    });
    //this.api.dispose()
  }
}
