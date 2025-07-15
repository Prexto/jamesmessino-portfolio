// ==========================================
// PROJECTS.JS - Dynamic Project Management
// ==========================================

// Project Data Structure
const projectsData = {
    'ai-agent-platform': {
        title: 'AI Agent Platform',
        category: 'ai-automation',
        status: 'live',
        type: 'AI Agent',
        description: 'Comprehensive platform for deploying and managing AI agents with MCP protocol integration.',
        longDescription: `
            <p>This AI Agent Platform represents the cutting edge of artificial intelligence automation, built specifically for enterprise-level deployment and management of AI agents.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>🤖 MCP Protocol Integration for seamless context management</li>
                <li>📊 Real-time performance monitoring and analytics</li>
                <li>🔧 Drag-and-drop workflow builder</li>
                <li>🛡️ Enterprise-grade security and compliance</li>
                <li>📈 Auto-scaling capabilities</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built using Python with FastAPI for the backend, React for the frontend, and integrated with multiple AI model providers including OpenAI, Anthropic, and custom models.</p>
        `,
        metrics: [
            { icon: 'fas fa-users', text: '1,200+ interactions' },
            { icon: 'fas fa-clock', text: '0.3s response time' },
            { icon: 'fas fa-shield-alt', text: '99.9% uptime' }
        ],
        tech: ['Python', 'AI', 'MCP', 'API', 'FastAPI', 'React'],
        actions: [
            { text: 'Try Demo', type: 'primary', action: 'demo' },
            { text: 'View Code', type: 'secondary', action: 'code' },
            { text: 'API Docs', type: 'tertiary', action: 'docs' }
        ],
        media: {
            video: 'https://example.com/ai-agent-demo.mp4',
            images: ['ai-agent-1.jpg', 'ai-agent-2.jpg', 'ai-agent-3.jpg']
        }
    },
    'analytics-dashboard': {
        title: 'Analytics Dashboard',
        category: 'data-analytics',
        status: 'live',
        type: 'SaaS',
        description: 'Real-time data visualization platform with advanced analytics capabilities.',
        longDescription: `
            <p>A comprehensive analytics dashboard that processes millions of data points in real-time, providing actionable insights for business intelligence.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>📊 Real-time data visualization with D3.js</li>
                <li>🔍 Advanced filtering and search capabilities</li>
                <li>📈 Custom report generation</li>
                <li>🚀 High-performance data processing</li>
                <li>📱 Mobile-responsive design</li>
            </ul>
            <h4>Performance Metrics:</h4>
            <p>Processes over 50 million records monthly with 99.9% uptime, serving enterprise clients with mission-critical data needs.</p>
        `,
        metrics: [
            { icon: 'fas fa-database', text: '50M+ records processed' },
            { icon: 'fas fa-tachometer-alt', text: '99.9% uptime' },
            { icon: 'fas fa-chart-line', text: '500+ active users' }
        ],
        tech: ['React', 'Python', 'Analytics', 'Dashboard', 'D3.js', 'PostgreSQL'],
        actions: [
            { text: 'Live Demo', type: 'primary', action: 'demo' },
            { text: 'Source Code', type: 'secondary', action: 'code' },
            { text: 'Case Study', type: 'tertiary', action: 'case-study' }
        ]
    },
    'automation-suite': {
        title: 'Enterprise Automation Suite',
        category: 'ai-automation',
        status: 'template',
        type: 'N8N Workflow',
        description: 'N8N-based automation toolkit for streamlining complex business processes.',
        longDescription: `
            <p>A comprehensive suite of N8N workflows designed to automate enterprise-level business processes and integrate with 50+ popular services.</p>
            <h4>Included Workflows:</h4>
            <ul>
                <li>📧 Email automation and response systems</li>
                <li>📊 Data synchronization between platforms</li>
                <li>🔔 Intelligent notification systems</li>
                <li>📈 Automated reporting and analytics</li>
                <li>🛡️ Security monitoring and alerts</li>
            </ul>
            <h4>Integration Capabilities:</h4>
            <p>Seamlessly integrates with Slack, Google Workspace, Microsoft 365, CRM systems, and database platforms.</p>
        `,
        metrics: [
            { icon: 'fas fa-play', text: '15+ workflows' },
            { icon: 'fas fa-save', text: '80% time saved' },
            { icon: 'fas fa-link', text: '50+ integrations' }
        ],
        tech: ['N8N', 'Automation', 'Integration', 'Workflow', 'API', 'Webhooks'],
        actions: [
            { text: 'View Workflow', type: 'primary', action: 'workflow' },
            { text: 'Download Template', type: 'secondary', action: 'download' },
            { text: 'Documentation', type: 'tertiary', action: 'docs' }
        ]
    },
    'volunteer-app': {
        title: 'VolunteerConnect App',
        category: 'mobile-apps',
        status: 'beta',
        type: 'Mobile App',
        description: 'Cross-platform mobile application connecting volunteers with local community projects.',
        longDescription: `
            <p>A Flutter-based mobile application that revolutionizes volunteer coordination by connecting passionate individuals with meaningful community projects.</p>
            <h4>Core Features:</h4>
            <ul>
                <li>📱 Cross-platform compatibility (iOS & Android)</li>
                <li>🎯 Smart matching algorithm</li>
                <li>📍 Location-based project discovery</li>
                <li>💬 Real-time messaging system</li>
                <li>🏆 Gamification and achievement system</li>
            </ul>
            <h4>Impact Statistics:</h4>
            <p>Successfully connected over 2,500 volunteers with community projects, maintaining a 4.8/5 user satisfaction rating.</p>
        `,
        metrics: [
            { icon: 'fas fa-download', text: '2,500+ downloads' },
            { icon: 'fas fa-star', text: '4.8/5 rating' },
            { icon: 'fas fa-users', text: '1,800+ active users' }
        ],
        tech: ['Flutter', 'Firebase', 'Mobile', 'UI/UX', 'Dart', 'Real-time'],
        actions: [
            { text: 'Try Beta', type: 'primary', action: 'beta' },
            { text: 'App Store', type: 'secondary', action: 'store' },
            { text: 'Screenshots', type: 'tertiary', action: 'screenshots' }
        ]
    },
    'pixel-quest': {
        title: 'Pixel Quest Adventures',
        category: 'game-development',
        status: 'live',
        type: 'Indie Game',
        description: 'Retro-style 2D platformer with procedurally generated levels and unique pixel art style.',
        longDescription: `
            <p>An indie game that combines nostalgic 2D platforming with modern procedural generation techniques, creating endless replayability.</p>
            <h4>Game Features:</h4>
            <ul>
                <li>🎮 Procedurally generated levels</li>
                <li>🎨 Hand-crafted pixel art graphics</li>
                <li>🎵 Original chiptune soundtrack</li>
                <li>🏆 Achievement system</li>
                <li>💾 Cross-platform save system</li>
            </ul>
            <h4>Technical Achievement:</h4>
            <p>Built entirely with Godot Engine, featuring custom shaders and optimized performance for both desktop and mobile platforms.</p>
        `,
        metrics: [
            { icon: 'fas fa-play', text: '10K+ plays' },
            { icon: 'fas fa-trophy', text: '95% completion rate' },
            { icon: 'fas fa-star', text: '4.7/5 rating' }
        ],
        tech: ['Godot', 'Game Dev', 'Pixel Art', 'Procedural', 'GDScript', 'Mobile'],
        actions: [
            { text: 'Play Game', type: 'primary', action: 'play' },
            { text: 'Source Code', type: 'secondary', action: 'code' },
            { text: 'Dev Blog', type: 'tertiary', action: 'blog' }
        ]
    },
    'ecommerce-platform': {
        title: 'NexCommerce Platform',
        category: 'web-development',
        status: 'live',
        type: 'E-commerce',
        description: 'Full-featured e-commerce platform with custom CMS, payment integration, and inventory management.',
        longDescription: `
            <p>A comprehensive e-commerce solution built from the ground up using the MERN stack, designed to handle high-volume transactions with enterprise-grade security.</p>
            <h4>Platform Features:</h4>
            <ul>
                <li>🛒 Complete shopping cart and checkout system</li>
                <li>💳 Multiple payment gateway integrations</li>
                <li>📦 Advanced inventory management</li>
                <li>📊 Real-time analytics dashboard</li>
                <li>🔐 Enterprise security features</li>
            </ul>
            <h4>Business Impact:</h4>
            <p>Currently processing 500+ orders monthly with over $50K in revenue, serving multiple client businesses.</p>
        `,
        metrics: [
            { icon: 'fas fa-shopping-cart', text: '500+ orders/month' },
            { icon: 'fas fa-dollar-sign', text: '$50K+ revenue' },
            { icon: 'fas fa-users', text: '10K+ customers' }
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'E-commerce', 'Stripe', 'Express'],
        actions: [
            { text: 'Live Demo', type: 'primary', action: 'demo' },
            { text: 'Source Code', type: 'secondary', action: 'code' },
            { text: 'Case Study', type: 'tertiary', action: 'case-study' }
        ]
    }
};

// Filter Management
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectFilters();
    setupProjectModal();
});

function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Modal Management
function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-project-content');
    const project = projectsData[projectId];
    
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    // Generate modal content
    content.innerHTML = `
        <div class="modal-header">
            <div class="modal-title-section">
                <h2>${project.title}</h2>
                <div class="modal-badges">
                    <span class="badge-status ${project.status}">${project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                    <span class="badge-type">${project.type}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="modal-description">
                ${project.longDescription}
            </div>
            
            <div class="modal-metrics">
                <h4>Project Metrics</h4>
                <div class="metrics-grid">
                    ${project.metrics.map(metric => `
                        <div class="metric-item">
                            <i class="${metric.icon}"></i>
                            <span>${metric.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-tech">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="modal-actions">
            ${project.actions.map(action => `
                <button class="btn-${action.type}" onclick="handleProjectAction('${projectId}', '${action.action}')">
                    ${action.text}
                </button>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Action Handlers
function handleProjectAction(projectId, action) {
    const project = projectsData[projectId];
    
    switch (action) {
        case 'demo':
            window.open('#demo-' + projectId, '_blank');
            break;
        case 'code':
            window.open('#github-' + projectId, '_blank');
            break;
        case 'docs':
            window.open('#docs-' + projectId, '_blank');
            break;
        case 'workflow':
            showWorkflowViewer(projectId);
            break;
        case 'download':
            downloadProjectTemplate(projectId);
            break;
        case 'play':
            window.open('#play-' + projectId, '_blank');
            break;
        case 'beta':
            window.open('#beta-' + projectId, '_blank');
            break;
        case 'store':
            window.open('#store-' + projectId, '_blank');
            break;
        case 'screenshots':
            showScreenshotGallery(projectId);
            break;
        case 'case-study':
            showCaseStudy(projectId);
            break;
        case 'blog':
            window.open('#blog-' + projectId, '_blank');
            break;
        default:
            console.log('Action not implemented:', action);
    }
}

// Specialized Action Functions
function downloadProjectTemplate(projectId) {
    // Simulate template download
    const link = document.createElement('a');
    link.href = `templates/${projectId}-template.json`;
    link.download = `${projectId}-template.json`;
    link.click();
    
    // Show success message
    showNotification('Template downloaded successfully!', 'success');
}

function showWorkflowViewer(projectId) {
    // This would open a workflow visualization
    showNotification('Opening workflow viewer...', 'info');
    // Implementation would depend on your workflow visualization needs
}

function showScreenshotGallery(projectId) {
    // This would open a screenshot gallery
    showNotification('Opening screenshot gallery...', 'info');
    // Implementation would show a carousel of screenshots
}

function showCaseStudy(projectId) {
    // This would open a detailed case study
    showNotification('Opening case study...', 'info');
    // Implementation would show detailed project analysis
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// CSS Animation for fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    }
    
    .notification-success { background-color: #4CAF50; }
    .notification-info { background-color: #2196F3; }
    .notification-warning { background-color: #FF9800; }
    .notification-error { background-color: #F44336; }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
