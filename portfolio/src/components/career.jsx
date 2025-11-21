import React from 'react';
import './css/index.css'; 



function Career() {
    return (
        <>

            <div className="timeline">
                <h4>Career:</h4>
                <div className="container">
                    <div className="component">
                        <div className="timeline_date date_right">2024 January 8TH</div>
                    </div>

                    <div className="component_middle">
                        <div className="timeline_dot"></div>
                    </div>
                    <div className="component">
                        <div className="timeline_left achivement"><h4><b><u>Smart-People Africa Ltd</u></b></h4>
                            <ul>
                                <li>• Design and implement server-side logic using Java and Tomcat.</li>
                                <li>• Develop and maintain database schema and queries using PostgreSQL.</li>
                                <li>• Optimize and tune the performance of back-end services.</li>
                                <li>• Configure and manage deployment pipelines using Git for version control.</li>
                                <li>• Automate build, test, and deployment processes.</li>
                                <li>• Monitor system performance and troubleshoot issues.</li>
                                <li>• Manage and optimize PostgreSQL databases.</li>
                                <li>• Ensure data integrity and security.</li>
                                <li>• Backup and restore databases as needed.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="component">
                        <div className="timeline_right achivement"><h4><b><u>Kenya Institute of Public Policy Research & Analysis(KIPPRA)</u></b></h4>
                            <ul>
                                <li>• Reviewed diagnostics and assessed the functionality and efficiency of systems.</li>
                                <li>• Implemented security measures and monitored security certificates.</li>
                                <li>• Offered technical support to company staff, troubleshooting computer problems.</li>
                                <li>• Installed and updated company software and hardware as needed</li>
                                <ul>• Anticipated and reported the cost of replacing or updating computer items.</ul>
                            </ul>

                        </div>
                    </div>
                    <div className="component_middle">
                        <div className="timeline_dot"></div>
                    </div>
                    <div className="component">
                        <div className="timeline_date date_left">Jan 2023</div>
                    </div>
                    <div className="component">
                        <div className="timeline_date date_right">Jun 2019</div>
                    </div>

                    <div className="component_middle">
                        <div className="timeline_dot"></div>
                        <div className="timeline_dot timeline_dot--bottom"></div>
                    </div>
                    <div className="component">
                        <div className="timeline_left achivement"><h4><b><u>National Treasury(PFMR)</u></b></h4>
                            <ul>
                                <li>• Support the IT team in maintaining hardware, software, and other systems.</li>
                                <li>• Assist with troubleshooting issues and provide technical support.</li>
                                <li>• Organize and maintain IT resources.</li>
                                <li>• Lend IT support in areas such as cybersecurity, programming, analytics, and data
                                    center management.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Career;