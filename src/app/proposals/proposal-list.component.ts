import { Component } from '@angular/core';
import { Proposal } from './proposal'

@Component({
	selector: 'proposals',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(1, 'ABC Company', 'http://portfolio.abc.company.com', 'Ruby on Rails', 150, 100, 15, 'abc@gmail.com' )

	proposalTwo: Proposal = new Proposal(23, 'GHJ Company', 'http://portfolio.fjs.company.com', 'Ruby on Rails', 100, 90, 15, 'ghfj@gmail.com' )

	proposalThree: Proposal = new Proposal(67, 'ZXC Company', 'http://portfolio.Zxcv.company.com', 'Ruby on Rails', 100, 100, 25, 'abgjjc@gmail.com' )

	proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree ]
}
















